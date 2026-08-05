#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";

const root = process.cwd();
const requestedBase = process.argv[2] || process.env.BILINGUAL_BASE_SHA || "";
const hasExplicitBase = Boolean(requestedBase);
const zeroSha = /^0+$/;
const emptyTree = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const errors = [];

function git(args, options = {}) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", options.allowFailure ? "ignore" : "pipe"]
  }).trim();
}

function commitExists(reference) {
  try {
    git(["cat-file", "-e", `${reference}^{commit}`], { allowFailure: true });
    return true;
  } catch {
    return false;
  }
}

function resolveBase() {
  if (requestedBase && zeroSha.test(requestedBase)) return emptyTree;
  if (requestedBase && commitExists(requestedBase)) return requestedBase;
  if (requestedBase) {
    errors.push(`base commit does not exist locally: ${requestedBase}`);
    return null;
  }
  try {
    return git(["rev-parse", "HEAD"]);
  } catch {
    return emptyTree;
  }
}

function changedFilesFrom(base) {
  if (!base) return new Set();
  const diffArgs = hasExplicitBase
    ? ["diff", "--name-only", "--diff-filter=ACMR", base, "HEAD"]
    : ["diff", "--name-only", "--diff-filter=ACMR", base];
  return new Set(
    git(diffArgs)
      .split("\n")
      .filter(Boolean)
  );
}

function requirePair(changed, file, counterpart) {
  if (changed.has(file) && !changed.has(counterpart)) {
    errors.push(`${file} changed without its counterpart ${counterpart}`);
  }
}

function loadCatalog(source, filename) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename });
  return sandbox.window.STUDIO_VIDEO_DECKS;
}

function stable(value) {
  return JSON.stringify(value ?? null);
}

function validateVideoModuleChanges(base, changed) {
  const contentFile = "slides/videos/shared/content.js";
  if (!changed.has(contentFile) || base === emptyTree) return;

  let previousSource;
  try {
    previousSource = git(["show", `${base}:${contentFile}`]);
  } catch {
    return;
  }

  const currentSource = fs.readFileSync(path.join(root, contentFile), "utf8");
  const previous = loadCatalog(previousSource, `${contentFile}@${base}`);
  const current = loadCatalog(currentSource, contentFile);
  const previousPt = previous?.locales?.["pt-BR"];
  const previousEn = previous?.locales?.en;
  const currentPt = current?.locales?.["pt-BR"];
  const currentEn = current?.locales?.en;

  const moduleIds = new Set([
    ...Object.keys(previousPt?.modules ?? {}),
    ...Object.keys(previousEn?.modules ?? {}),
    ...Object.keys(currentPt?.modules ?? {}),
    ...Object.keys(currentEn?.modules ?? {})
  ]);

  for (const moduleId of moduleIds) {
    const ptChanged = stable(previousPt?.modules?.[moduleId]) !== stable(currentPt?.modules?.[moduleId]);
    const enChanged = stable(previousEn?.modules?.[moduleId]) !== stable(currentEn?.modules?.[moduleId]);
    if (ptChanged !== enChanged) {
      errors.push(`video module ${moduleId} changed in ${ptChanged ? "pt-BR" : "en"} without an equivalent ${ptChanged ? "en" : "pt-BR"} update`);
    }
  }

  const ptUiChanged = stable(previousPt?.ui) !== stable(currentPt?.ui);
  const enUiChanged = stable(previousEn?.ui) !== stable(currentEn?.ui);
  if (ptUiChanged !== enUiChanged) {
    errors.push(`video interface copy changed in ${ptUiChanged ? "pt-BR" : "en"} without an equivalent ${ptUiChanged ? "en" : "pt-BR"} update`);
  }

  const ptOrderChanged = stable(previousPt?.moduleOrder) !== stable(currentPt?.moduleOrder);
  const enOrderChanged = stable(previousEn?.moduleOrder) !== stable(currentEn?.moduleOrder);
  if (ptOrderChanged !== enOrderChanged) {
    errors.push(`video module order changed in ${ptOrderChanged ? "pt-BR" : "en"} without an equivalent ${ptOrderChanged ? "en" : "pt-BR"} update`);
  }
}

const base = resolveBase();
const changed = changedFilesFrom(base);

for (const file of changed) {
  let match = file.match(/^studio\/(pt-BR|en)\/(.+\.md)$/);
  if (match) {
    const otherLocale = match[1] === "pt-BR" ? "en" : "pt-BR";
    requirePair(changed, file, `studio/${otherLocale}/${match[2]}`);
    continue;
  }

  match = file.match(/^workshop\/(pt-BR|en)\/(.+\.md)$/);
  if (match) {
    const otherLocale = match[1] === "pt-BR" ? "en" : "pt-BR";
    requirePair(changed, file, `workshop/${otherLocale}/${match[2]}`);
    continue;
  }

  match = file.match(/^slides\/videos\/(pt-BR|en)\/(.+\.html)$/);
  if (match) {
    const otherLocale = match[1] === "pt-BR" ? "en" : "pt-BR";
    requirePair(changed, file, `slides/videos/${otherLocale}/${match[2]}`);
  }
}

validateVideoModuleChanges(base, changed);

if (errors.length) {
  console.error(`Bilingual change validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Bilingual change validation passed: ${changed.size} changed file(s) checked against ${base}.`);
