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
    for (const locale of ["pt-BR", "en"]) {
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

          if (locale === "pt-BR") {
            const screenshotName = `${module.number}-${String(index + 1).padStart(2, "0")}.png`;
            await page.locator(".deck-stage").screenshot({ path: path.join(localeOutput, screenshotName) });
          }
          checkedSlides += 1;
        }

        if (pageErrors.length) errors.push(`${locale}/${moduleId}: ${pageErrors.join(" | ")}`);
        await page.close();
      }
    }

    const indexPage = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    await indexPage.goto(pathToFileURL(path.join(videoRoot, "index.html")).href, { waitUntil: "load" });
    if ((await indexPage.locator(".playlist a").count()) !== 18) errors.push("index does not contain 18 module links");
    await indexPage.screenshot({ path: path.join(outputRoot, "index.png"), fullPage: true });
    await indexPage.close();

    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const ptData = catalog.locales["pt-BR"];
    for (const moduleId of ptData.moduleOrder) {
      const module = ptData.modules[moduleId];
      const mobileEntry = path.join(videoRoot, "pt-BR", module.slug);
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
        if (!mobileFit) errors.push(`mobile pt-BR/${moduleId} slide ${index + 1} exceeds the stage`);
        checkedMobileSlides += 1;
      }
      if (moduleId === "studio-code") {
        await mobilePage.keyboard.press("Home");
        await mobilePage.evaluate(() => document.getAnimations().forEach((animation) => animation.finish()));
        await mobilePage.screenshot({ path: path.join(outputRoot, "mobile.png"), fullPage: true });
      }
    }
    await mobilePage.close();

    const reducedPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await reducedPage.emulateMedia({ reducedMotion: "reduce" });
    const reducedEntry = path.join(videoRoot, "pt-BR", ptData.modules["studio-code"].slug);
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
  console.log(`- ${checkedMobileSlides} PT-BR slides rendered at 390 × 844`);
  console.log("- keyboard navigation, notes, animation, and reduced motion verified");
  console.log(`- visual QA output: ${outputRoot}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
