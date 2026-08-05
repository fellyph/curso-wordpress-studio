#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";

const root = process.cwd();
const locales = ["pt-BR", "en", "es"];
const requestedBase = process.argv[2] || process.env.LANGUAGE_BASE_SHA || process.env.BILINGUAL_BASE_SHA || "";
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

function objectExists(reference) {
  try {
    git(["cat-file", "-e", reference], { allowFailure: true });
    return true;
  } catch {
    return false;
  }
}

function resolveBase() {
  if (requestedBase && zeroSha.test(requestedBase)) return emptyTree;
  if (requestedBase && objectExists(`${requestedBase}^{commit}`)) return requestedBase;
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
  const changed = new Set(git(diffArgs).split("\n").filter(Boolean));
  if (!hasExplicitBase) {
    git(["ls-files", "--others", "--exclude-standard"])
      .split("\n")
      .filter(Boolean)
      .forEach((file) => changed.add(file));
  }
  return changed;
}

function existedAtBase(base, file) {
  return base !== emptyTree && objectExists(`${base}:${file}`);
}

function requireAllCounterparts(changed, base, file, area, locale, suffix) {
  if (!changed.has(file) || !existedAtBase(base, file)) return;
  for (const otherLocale of locales.filter((candidate) => candidate !== locale)) {
    const counterpart = `${area}/${otherLocale}/${suffix}`;
    if (!changed.has(counterpart)) {
      errors.push(`${file} changed without its ${otherLocale} counterpart ${counterpart}`);
    }
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

function requireAllExistingLocalesChanged(label, previousValues, currentValues) {
  const existingLocales = locales.filter((locale) => previousValues[locale] !== undefined);
  const changedLocales = existingLocales.filter((locale) => stable(previousValues[locale]) !== stable(currentValues[locale]));
  if (changedLocales.length > 0 && changedLocales.length !== existingLocales.length) {
    const missing = existingLocales.filter((locale) => !changedLocales.includes(locale));
    errors.push(`${label} changed in ${changedLocales.join(", ")} without equivalent updates in ${missing.join(", ")}`);
  }
}

function validateVideoModuleChanges(base, changed) {
  const contentFile = "slides/videos/shared/content.js";
  if (!changed.has(contentFile) || base === emptyTree || !existedAtBase(base, contentFile)) return;

  const previousSource = git(["show", `${base}:${contentFile}`]);
  const currentSource = fs.readFileSync(path.join(root, contentFile), "utf8");
  const previous = loadCatalog(previousSource, `${contentFile}@${base}`);
  const current = loadCatalog(currentSource, contentFile);
  const moduleIds = new Set();

  for (const locale of locales) {
    Object.keys(previous?.locales?.[locale]?.modules ?? {}).forEach((moduleId) => moduleIds.add(moduleId));
    Object.keys(current?.locales?.[locale]?.modules ?? {}).forEach((moduleId) => moduleIds.add(moduleId));
  }

  for (const moduleId of moduleIds) {
    const previousValues = Object.fromEntries(locales.map((locale) => [locale, previous?.locales?.[locale]?.modules?.[moduleId]]));
    const currentValues = Object.fromEntries(locales.map((locale) => [locale, current?.locales?.[locale]?.modules?.[moduleId]]));
    requireAllExistingLocalesChanged(`video module ${moduleId}`, previousValues, currentValues);
  }

  for (const field of ["ui", "moduleOrder", "seriesTitle"]) {
    const previousValues = Object.fromEntries(locales.map((locale) => [locale, previous?.locales?.[locale]?.[field]]));
    const currentValues = Object.fromEntries(locales.map((locale) => [locale, current?.locales?.[locale]?.[field]]));
    requireAllExistingLocalesChanged(`video ${field}`, previousValues, currentValues);
  }
}

const base = resolveBase();
const changed = changedFilesFrom(base);
const localePattern = locales.map((locale) => locale.replace("-", "\\-")).join("|");

for (const file of changed) {
  let match = file.match(new RegExp(`^studio/(${localePattern})/(.+\\.md)$`));
  if (match) {
    requireAllCounterparts(changed, base, file, "studio", match[1], match[2]);
    continue;
  }

  match = file.match(new RegExp(`^workshop/(${localePattern})/(.+\\.md)$`));
  if (match) {
    requireAllCounterparts(changed, base, file, "workshop", match[1], match[2]);
    continue;
  }

  match = file.match(new RegExp(`^slides/videos/(${localePattern})/(.+\\.html)$`));
  if (match) {
    requireAllCounterparts(changed, base, file, "slides/videos", match[1], match[2]);
  }
}

validateVideoModuleChanges(base, changed);

if (errors.length) {
  console.error(`Language parity validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Language parity validation passed: ${changed.size} changed file(s), ${locales.length} supported locales, base ${base}.`);
