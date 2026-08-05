#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const videosDir = path.join(root, "slides", "videos");
const contentPath = path.join(videosDir, "shared", "content.js");
const errors = [];

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(contentPath, "utf8"), sandbox, {
  filename: contentPath
});

const catalog = sandbox.window.STUDIO_VIDEO_DECKS;
const locales = ["pt-BR", "en"];
const validTones = new Set(["paper", "frost", "cobalt", "ink", "terracotta", "cream"]);
const validLayouts = new Set(["cover", "outro", "split", "comparison", "flow", "checklist", "steps", "statement"]);
const forbidden = [
  { pattern: /Studio 1\.15/i, label: "obsolete Studio 1.15 baseline" },
  { pattern: /GPT[ -]?5\.5/i, label: "obsolete GPT 5.5 model" },
  { pattern: /Preview (is|é) (a |uma )?(permanent hosting|hospedagem permanente)/i, label: "Preview described as permanent hosting" }
];

if (!catalog) errors.push("content.js did not expose window.STUDIO_VIDEO_DECKS");

const ptOrder = catalog?.locales?.["pt-BR"]?.moduleOrder ?? [];
const enOrder = catalog?.locales?.en?.moduleOrder ?? [];

if (ptOrder.length !== 9) errors.push(`expected 9 modules, found ${ptOrder.length}`);
if (JSON.stringify(ptOrder) !== JSON.stringify(enOrder)) {
  errors.push("PT-BR and EN module order differs");
}

for (const locale of locales) {
  const localeData = catalog?.locales?.[locale];
  if (!localeData) {
    errors.push(`missing locale ${locale}`);
    continue;
  }

  localeData.moduleOrder.forEach((moduleId, moduleIndex) => {
    const module = localeData.modules?.[moduleId];
    if (!module) {
      errors.push(`${locale}: missing module ${moduleId}`);
      return;
    }

    const expectedNumber = String(moduleIndex + 1).padStart(2, "0");
    if (module.number !== expectedNumber) {
      errors.push(`${locale}/${moduleId}: number ${module.number} should be ${expectedNumber}`);
    }
    if (!module.slug || !module.title || !module.promise || module.duration !== "5 min") {
      errors.push(`${locale}/${moduleId}: incomplete module metadata`);
    }
    if (!Array.isArray(module.slides) || module.slides.length !== 5) {
      errors.push(`${locale}/${moduleId}: expected exactly 5 slides`);
      return;
    }

    const htmlPath = path.join(videosDir, locale, module.slug);
    if (!fs.existsSync(htmlPath)) {
      errors.push(`${locale}/${moduleId}: missing entry file ${module.slug}`);
    } else {
      const html = fs.readFileSync(htmlPath, "utf8");
      if (!html.includes(`data-lang="${locale}"`) || !html.includes(`data-module="${moduleId}"`)) {
        errors.push(`${locale}/${moduleId}: entry file has incorrect data attributes`);
      }
    }

    module.slides.forEach((slide, slideIndex) => {
      const context = `${locale}/${moduleId} slide ${slideIndex + 1}`;
      if (!slide.title || !slide.eyebrow || !slide.notes) {
        errors.push(`${context}: missing title, eyebrow, or notes`);
      }
      if (!validTones.has(slide.tone)) errors.push(`${context}: invalid tone ${slide.tone}`);
      if (!validLayouts.has(slide.layout)) errors.push(`${context}: invalid layout ${slide.layout}`);
      if (slide.accent && !slide.title.includes(slide.accent)) {
        errors.push(`${context}: accent is not present in the title`);
      }
    });
  });
}

for (const moduleId of ptOrder) {
  const pt = catalog.locales["pt-BR"].modules[moduleId];
  const en = catalog.locales.en.modules[moduleId];
  if (!en) continue;
  if (pt.slug !== en.slug) errors.push(`${moduleId}: locale slugs differ`);
  if (pt.slides.length !== en.slides.length) errors.push(`${moduleId}: locale slide counts differ`);
  pt.slides.forEach((slide, index) => {
    const counterpart = en.slides[index];
    if (slide.layout !== counterpart.layout || slide.tone !== counterpart.tone) {
      errors.push(`${moduleId} slide ${index + 1}: layout/tone parity differs`);
    }
    if ((slide.items?.length ?? 0) !== (counterpart.items?.length ?? 0)) {
      errors.push(`${moduleId} slide ${index + 1}: item counts differ`);
    }
  });
}

const searchable = fs.readFileSync(contentPath, "utf8");
for (const check of forbidden) {
  if (check.pattern.test(searchable)) errors.push(`content contains ${check.label}`);
}

for (const required of [
  "index.html",
  "README.md",
  path.join("shared", "deck.css"),
  path.join("shared", "deck.js"),
  path.join("shared", "index.css"),
  path.join("shared", "index.js")
]) {
  if (!fs.existsSync(path.join(videosDir, required))) errors.push(`missing ${required}`);
}

if (errors.length) {
  console.error(`Video slide validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Video slide validation passed:");
console.log(`- ${ptOrder.length} modules × ${locales.length} locales`);
console.log("- 5 slides per deck (45 minutes per language)");
console.log("- bilingual layout, tone, item, slug, and entry-file parity");
console.log("- required runtime, index, and documentation files present");
