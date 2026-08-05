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
const locales = ["pt-BR", "en", "es"];
const canonicalLocale = "en";
const validTones = new Set(["paper", "frost", "cobalt", "ink", "terracotta", "cream"]);
const validLayouts = new Set(["cover", "outro", "split", "comparison", "flow", "checklist", "steps", "statement"]);
const forbidden = [
  { pattern: /Studio 1\.15/i, label: "obsolete Studio 1.15 baseline" },
  { pattern: /GPT[ -]?5\.5/i, label: "obsolete GPT 5.5 model" },
  { pattern: /Preview (is|é|es) (a |uma |un )?(permanent hosting|hospedagem permanente|alojamiento permanente)/i, label: "Preview described as permanent hosting" }
];

if (!catalog) errors.push("content.js did not expose window.STUDIO_VIDEO_DECKS");

const canonicalOrder = catalog?.locales?.[canonicalLocale]?.moduleOrder ?? [];

if (canonicalOrder.length !== 9) errors.push(`expected 9 modules, found ${canonicalOrder.length}`);
for (const locale of locales) {
  const order = catalog?.locales?.[locale]?.moduleOrder ?? [];
  if (JSON.stringify(order) !== JSON.stringify(canonicalOrder)) {
    errors.push(`${locale} module order differs from ${canonicalLocale}`);
  }
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
    if (module.slides.at(-1)?.layout !== "outro" || !module.slides.at(-1)?.next) {
      errors.push(`${locale}/${moduleId}: final slide must be an outro with a next label`);
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
      if (slideIndex < module.slides.length - 1 && slide.layout === "outro") {
        errors.push(`${context}: outro layout is only allowed on the final slide`);
      }
      for (const item of slide.items ?? []) {
        if (!item.resource) continue;
        if (!/^[a-z0-9-]+\.md$/.test(item.resource)) {
          errors.push(`${context}: invalid workshop resource ${item.resource}`);
          continue;
        }
        const resourcePath = path.join(root, "workshop", locale, item.resource);
        if (!fs.existsSync(resourcePath)) {
          errors.push(`${context}: missing workshop resource ${item.resource}`);
        }
      }
    });
  });
}

for (const moduleId of canonicalOrder) {
  const canonical = catalog.locales[canonicalLocale].modules[moduleId];
  if (!canonical) continue;
  for (const locale of locales) {
    const localized = catalog.locales[locale].modules[moduleId];
    if (!localized) continue;
    if (localized.slug !== canonical.slug) errors.push(`${moduleId}: ${locale} slug differs from ${canonicalLocale}`);
    if (localized.slides.length !== canonical.slides.length) errors.push(`${moduleId}: ${locale} slide count differs from ${canonicalLocale}`);
    localized.slides.forEach((slide, index) => {
      const counterpart = canonical.slides[index];
      if (slide.layout !== counterpart.layout || slide.tone !== counterpart.tone) {
        errors.push(`${moduleId} slide ${index + 1}: ${locale} layout/tone differs from ${canonicalLocale}`);
      }
      if ((slide.items?.length ?? 0) !== (counterpart.items?.length ?? 0)) {
        errors.push(`${moduleId} slide ${index + 1}: ${locale} item count differs from ${canonicalLocale}`);
      }
      if ((slide.items?.filter((item) => item.resource).length ?? 0) !== (counterpart.items?.filter((item) => item.resource).length ?? 0)) {
        errors.push(`${moduleId} slide ${index + 1}: ${locale} resource link count differs from ${canonicalLocale}`);
      }
    });
  }
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
console.log(`- ${canonicalOrder.length} modules × ${locales.length} locales`);
console.log("- 5 slides per deck (45 minutes per language)");
console.log("- multilingual layout, tone, item, slug, and entry-file parity");
console.log("- required runtime, index, and documentation files present");
