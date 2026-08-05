#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const videoRoot = path.join(root, "slides", "videos");
const outputRoot = process.argv[2] || "/private/tmp/studio-video-slides-qa";
const contentPath = path.join(videoRoot, "shared", "content.js");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(contentPath, "utf8"), sandbox, { filename: contentPath });
const catalog = sandbox.window.STUDIO_VIDEO_DECKS;

fs.mkdirSync(outputRoot, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  let checkedSlides = 0;
  let checkedMobileSlides = 0;

  try {
    for (const locale of ["pt-BR", "en", "es"]) {
      const localeData = catalog.locales[locale];
      const localeOutput = path.join(outputRoot, locale);
      fs.mkdirSync(localeOutput, { recursive: true });

      for (const moduleId of localeData.moduleOrder) {
        const module = localeData.modules[moduleId];
        const entryPath = path.join(videoRoot, locale, module.slug);
        const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
        const pageErrors = [];
        page.on("pageerror", (error) => pageErrors.push(error.message));
        page.on("console", (message) => {
          if (message.type() === "error" && !message.text().includes("fonts.googleapis.com")) {
            pageErrors.push(`console: ${message.text()}`);
          }
        });

        await page.goto(pathToFileURL(entryPath).href, { waitUntil: "load" });
        await page.waitForSelector(".slide.is-active");

        const firstCounter = await page.locator(".deck-counter").textContent();
        if (firstCounter.trim() !== "01 / 05") errors.push(`${locale}/${moduleId}: initial counter is ${firstCounter}`);

        await page.keyboard.press("ArrowRight");
        await page.waitForTimeout(20);
        if ((await page.locator(".deck-counter").textContent()).trim() !== "02 / 05") {
          errors.push(`${locale}/${moduleId}: ArrowRight did not advance`);
        }
        await page.keyboard.press("ArrowLeft");
        await page.waitForTimeout(20);
        if ((await page.locator(".deck-counter").textContent()).trim() !== "01 / 05") {
          errors.push(`${locale}/${moduleId}: ArrowLeft did not return`);
        }

        await page.keyboard.press("n");
        if (!(await page.locator(".notes-panel").evaluate((node) => node.classList.contains("is-open")))) {
          errors.push(`${locale}/${moduleId}: N did not open notes`);
        }
        await page.keyboard.press("n");

        for (let index = 0; index < module.slides.length; index += 1) {
          if (index > 0) {
            await page.keyboard.press("ArrowRight");
            await page.waitForTimeout(15);
          }
          await page.evaluate(() => document.getAnimations().forEach((animation) => animation.finish()));
          const layoutCheck = await page.locator(".slide.is-active").evaluate((slide) => {
            const stage = slide.parentElement.getBoundingClientRect();
            const content = slide.querySelector(".slide__content").getBoundingClientRect();
            const footer = slide.querySelector(".slide__footer").getBoundingClientRect();
            const title = slide.querySelector(".slide__title").getBoundingClientRect();
            const tolerance = 2;
            return {
              contentFits: content.left >= stage.left - tolerance && content.right <= stage.right + tolerance && content.top >= stage.top - tolerance && content.bottom <= stage.bottom + tolerance,
              footerFits: footer.left >= stage.left - tolerance && footer.right <= stage.right + tolerance && footer.bottom <= stage.bottom + tolerance,
              titleFits: title.left >= stage.left - tolerance && title.right <= stage.right + tolerance && title.top >= stage.top - tolerance && title.bottom <= stage.bottom + tolerance,
              animation: getComputedStyle(slide.querySelector(".reveal")).animationName
            };
          });
          if (!layoutCheck.contentFits || !layoutCheck.footerFits || !layoutCheck.titleFits) {
            errors.push(`${locale}/${moduleId} slide ${index + 1}: content exceeds the stage`);
          }
          if (layoutCheck.animation !== "reveal") {
            errors.push(`${locale}/${moduleId} slide ${index + 1}: reveal animation is not active`);
          }

          const expectedResources = (module.slides[index].items || []).filter((item) => item.resource);
          const resourceLinks = page.locator(".slide.is-active .slide__resource-link");
          if ((await resourceLinks.count()) !== expectedResources.length) {
            errors.push(`${locale}/${moduleId} slide ${index + 1}: resource link count differs from content`);
          }
          for (let resourceIndex = 0; resourceIndex < expectedResources.length; resourceIndex += 1) {
            const resource = expectedResources[resourceIndex];
            const resourceLink = resourceLinks.nth(resourceIndex);
            const expectedResourceHref = `${catalog.workshopFilesUrl}/${locale}/${encodeURIComponent(resource.resource)}`;
            if ((await resourceLink.getAttribute("href")) !== expectedResourceHref) {
              errors.push(`${locale}/${moduleId} slide ${index + 1}: incorrect resource URL for ${resource.resource}`);
            }
            if ((await resourceLink.getAttribute("target")) !== "_blank" || (await resourceLink.getAttribute("tabindex")) !== "0") {
              errors.push(`${locale}/${moduleId} slide ${index + 1}: ${resource.resource} is not an accessible external link`);
            }
          }

          if (locale === "pt-BR" || locale === "es") {
            const screenshotName = `${module.number}-${String(index + 1).padStart(2, "0")}.png`;
            await page.locator(".deck-stage").screenshot({ path: path.join(localeOutput, screenshotName) });
          }
          checkedSlides += 1;
        }

        const moduleIndex = localeData.moduleOrder.indexOf(moduleId);
        const nextModuleId = localeData.moduleOrder[moduleIndex + 1];
        const expectedHref = nextModuleId
          ? localeData.modules[nextModuleId].slug
          : "../index.html";
        const nextDeckLink = page.locator(".slide.is-active .slide__next");
        if ((await nextDeckLink.count()) !== 1) {
          errors.push(`${locale}/${moduleId}: final slide does not contain one next-deck link`);
        } else {
          const actualHref = await nextDeckLink.getAttribute("href");
          if (actualHref !== expectedHref) {
            errors.push(`${locale}/${moduleId}: next-deck href is ${actualHref}, expected ${expectedHref}`);
          }
          if ((await nextDeckLink.getAttribute("tabindex")) !== "0") {
            errors.push(`${locale}/${moduleId}: active next-deck link is not keyboard focusable`);
          }
          if (!(await nextDeckLink.getAttribute("aria-label"))) {
            errors.push(`${locale}/${moduleId}: next-deck link has no accessible label`);
          }
          const expectedDestination = nextModuleId
            ? pathToFileURL(path.join(videoRoot, locale, localeData.modules[nextModuleId].slug)).href
            : pathToFileURL(path.join(videoRoot, "index.html")).href;
          await nextDeckLink.click();
          await page.waitForLoadState("load");
          if (page.url() !== expectedDestination) {
            errors.push(`${locale}/${moduleId}: next-deck link opened ${page.url()}, expected ${expectedDestination}`);
          }
        }

        if (pageErrors.length) errors.push(`${locale}/${moduleId}: ${pageErrors.join(" | ")}`);
        await page.close();
      }
    }

    const indexPage = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    await indexPage.goto(pathToFileURL(path.join(videoRoot, "index.html")).href, { waitUntil: "load" });
    const expectedIndexLinks = Object.keys(catalog.locales).length * catalog.locales.en.moduleOrder.length;
    if ((await indexPage.locator(".playlist a").count()) !== expectedIndexLinks) {
      errors.push(`index does not contain ${expectedIndexLinks} module links`);
    }
    await indexPage.screenshot({ path: path.join(outputRoot, "index.png"), fullPage: true });
    await indexPage.close();

    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    for (const locale of ["pt-BR", "es"]) {
      const localeData = catalog.locales[locale];
      for (const moduleId of localeData.moduleOrder) {
        const module = localeData.modules[moduleId];
        const mobileEntry = path.join(videoRoot, locale, module.slug);
        await mobilePage.goto(pathToFileURL(mobileEntry).href, { waitUntil: "load" });
        await mobilePage.waitForSelector(".slide.is-active");
        for (let index = 0; index < module.slides.length; index += 1) {
          if (index > 0) await mobilePage.keyboard.press("ArrowRight");
          await mobilePage.evaluate(() => document.getAnimations().forEach((animation) => animation.finish()));
          const mobileFit = await mobilePage.locator(".slide.is-active").evaluate((slide) => {
            const stage = slide.parentElement.getBoundingClientRect();
            const content = slide.querySelector(".slide__content").getBoundingClientRect();
            const footer = slide.querySelector(".slide__footer").getBoundingClientRect();
            return content.left >= stage.left - 2 && content.right <= stage.right + 2 && content.top >= stage.top - 2 && content.bottom <= stage.bottom + 2 && footer.bottom <= stage.bottom + 2;
          });
          if (!mobileFit) errors.push(`mobile ${locale}/${moduleId} slide ${index + 1} exceeds the stage`);
          checkedMobileSlides += 1;
        }
        if (moduleId === "studio-code") {
          await mobilePage.keyboard.press("Home");
          await mobilePage.evaluate(() => document.getAnimations().forEach((animation) => animation.finish()));
          await mobilePage.screenshot({ path: path.join(outputRoot, `mobile-${locale}.png`), fullPage: true });
        }
      }
    }
    await mobilePage.close();

    const reducedPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await reducedPage.emulateMedia({ reducedMotion: "reduce" });
    const reducedEntry = path.join(videoRoot, "pt-BR", catalog.locales["pt-BR"].modules["studio-code"].slug);
    await reducedPage.goto(pathToFileURL(reducedEntry).href, { waitUntil: "load" });
    const reducedDuration = await reducedPage.locator(".slide.is-active .reveal").first().evaluate((node) => getComputedStyle(node).animationDuration);
    if (!reducedDuration.startsWith("0.001")) errors.push(`reduced motion animation duration is ${reducedDuration}`);
    await reducedPage.close();
  } finally {
    await browser.close();
  }

  if (errors.length) {
    console.error(`Browser validation failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log("Browser validation passed:");
  console.log(`- ${checkedSlides} slides rendered without stage overflow`);
  console.log(`- ${checkedMobileSlides} PT-BR/ES slides rendered at 390 × 844`);
  console.log("- keyboard navigation, notes, animation, and reduced motion verified");
  console.log("- every final-slide link points to the next localized deck or the series index");
  console.log("- every workshop artifact link points to its localized GitHub file and is keyboard focusable");
  console.log(`- visual QA output: ${outputRoot}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
