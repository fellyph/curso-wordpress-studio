(function () {
  "use strict";

  const body = document.body;
  const locale = body.dataset.lang;
  const moduleId = body.dataset.module;
  const catalog = window.STUDIO_VIDEO_DECKS;

  if (!catalog || !catalog.locales?.[locale]?.modules?.[moduleId]) {
    document.getElementById("deck-root").textContent =
      "This deck could not be loaded. Check the locale and module identifiers.";
    return;
  }

  const localeData = catalog.locales[locale];
  const moduleData = localeData.modules[moduleId];
  const ui = localeData.ui;
  const slides = moduleData.slides;
  const state = {
    index: getInitialIndex(),
    notesOpen: false,
  };

  document.documentElement.lang = locale;
  document.title = `${moduleData.number}. ${moduleData.title} — ${localeData.seriesTitle || catalog.seriesTitle}`;

  const root = document.getElementById("deck-root");
  const shell = element("main", "deck-shell");
  const chrome = element("header", "deck-chrome");
  const indexLink = element("a", "");
  indexLink.href = body.dataset.indexHref || "../index.html";
  indexLink.textContent = `← ${ui.seriesIndex}`;
  const moduleLabel = element("span", "");
  moduleLabel.textContent = `${ui.video} ${moduleData.number} / ${localeData.moduleOrder.length} · ${moduleData.duration}`;
  chrome.append(indexLink, moduleLabel);

  const stage = element("section", "deck-stage");
  stage.setAttribute("aria-label", `${ui.video}: ${moduleData.title}`);

  slides.forEach((slide, index) => {
    stage.append(renderSlide(slide, index));
  });

  const controls = element("footer", "deck-controls");
  const progress = element("div", "deck-progress");
  progress.setAttribute("role", "progressbar");
  progress.setAttribute("aria-valuemin", "1");
  progress.setAttribute("aria-valuemax", String(slides.length));
  const progressBar = element("div", "deck-progress__bar");
  progress.append(progressBar);

  const nav = element("nav", "deck-nav");
  nav.setAttribute("aria-label", ui.navigation);
  const previousButton = controlButton("←", ui.previous);
  const nextButton = controlButton("→", ui.next);
  previousButton.addEventListener("click", () => goTo(state.index - 1));
  nextButton.addEventListener("click", () => goTo(state.index + 1));
  nav.append(previousButton, nextButton);

  const counter = element("div", "deck-counter");
  counter.setAttribute("aria-live", "polite");
  controls.append(progress, nav, counter);

  const notesPanel = element("aside", "notes-panel");
  notesPanel.setAttribute("aria-live", "polite");
  notesPanel.setAttribute("aria-label", ui.speakerNotes);

  shell.append(chrome, stage, controls);
  root.replaceChildren(shell, notesPanel);

  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", () => {
    const requested = hashToIndex();
    if (requested !== null) goTo(requested, false);
  });

  let touchStartX = null;
  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.screenX ?? null;
  }, { passive: true });
  stage.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const delta = (event.changedTouches[0]?.screenX ?? touchStartX) - touchStartX;
    if (Math.abs(delta) > 48) goTo(state.index + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  update();

  function renderSlide(slide, index) {
    const article = element("article", "slide");
    article.dataset.tone = slide.tone || "paper";
    article.dataset.layout = slide.layout || "statement";
    article.setAttribute("aria-hidden", "true");
    article.style.setProperty("--item-count", String(slide.items?.length || 1));

    const topLine = element("div", "slide__topline reveal");
    topLine.style.setProperty("--reveal-index", "0");
    const eyebrow = element("span", "slide__eyebrow");
    eyebrow.textContent = slide.eyebrow || moduleData.shortTitle;
    const minute = element("span", "slide__minute");
    minute.textContent = `${ui.minute} ${index + 1}`;
    topLine.append(eyebrow, minute);

    const content = element("div", "slide__content");
    const headline = element("div", "slide__headline");
    const title = element("h1", "slide__title reveal");
    title.style.setProperty("--reveal-index", "1");
    appendAccentTitle(title, slide.title, slide.accent);
    headline.append(title);

    if (slide.body) {
      const bodyCopy = element("p", "slide__body reveal");
      bodyCopy.style.setProperty("--reveal-index", "2");
      bodyCopy.textContent = slide.body;
      headline.append(bodyCopy);
    }

    content.append(headline);

    if (slide.layout === "outro") {
      const next = element("div", "slide__next reveal");
      next.style.setProperty("--reveal-index", "3");
      next.textContent = slide.next || ui.nextVideo;
      content.append(next);
    } else if (slide.items?.length) {
      const list = element("ol", "slide__items");
      slide.items.forEach((item, itemIndex) => {
        const listItem = element("li", "slide__item reveal");
        listItem.style.setProperty("--reveal-index", String(itemIndex + 3));
        const marker = element("span", "slide__item-marker");
        const markerText = element("span", "");
        markerText.textContent = item.marker || String(itemIndex + 1).padStart(2, "0");
        marker.append(markerText);
        const copy = element("span", "slide__item-copy");
        const label = element("strong", "slide__item-label");
        label.textContent = item.label;
        copy.append(label);
        if (item.text) {
          const text = element("span", "slide__item-text");
          text.textContent = item.text;
          copy.append(text);
        }
        listItem.append(marker, copy);
        list.append(listItem);
      });
      content.append(list);
    }

    const footer = element("footer", "slide__footer reveal");
    footer.style.setProperty("--reveal-index", String((slide.items?.length || 0) + 3));
    const takeaway = element("span", "");
    takeaway.textContent = slide.takeaway || moduleData.promise;
    const step = element("span", "");
    step.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    footer.append(takeaway, step);

    const ghost = element("span", "slide__ghost-number");
    ghost.setAttribute("aria-hidden", "true");
    ghost.textContent = String(index + 1);
    article.append(topLine, content, footer, ghost);
    return article;
  }

  function appendAccentTitle(target, title, accent) {
    if (!accent || !title.includes(accent)) {
      target.textContent = title;
      return;
    }
    const start = title.indexOf(accent);
    target.append(document.createTextNode(title.slice(0, start)));
    const accentSpan = element("span", "slide__accent");
    accentSpan.textContent = accent;
    target.append(accentSpan, document.createTextNode(title.slice(start + accent.length)));
  }

  function handleKeydown(event) {
    const tag = event.target?.tagName?.toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;

    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      goTo(state.index + 1);
    } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goTo(state.index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(slides.length - 1);
    } else if (event.key.toLowerCase() === "n") {
      toggleNotes();
    } else if (event.key.toLowerCase() === "f") {
      toggleFullscreen();
    } else if (event.key.toLowerCase() === "r") {
      replayAnimation();
    }
  }

  function goTo(index, updateHash = true) {
    const bounded = Math.max(0, Math.min(slides.length - 1, index));
    if (bounded === state.index && document.querySelector(".slide.is-active")) return;
    state.index = bounded;
    if (updateHash) history.replaceState(null, "", `#${bounded + 1}`);
    update();
  }

  function update() {
    const articles = [...stage.querySelectorAll(".slide")];
    articles.forEach((article, index) => {
      article.classList.toggle("is-active", index === state.index);
      article.classList.toggle("is-before", index < state.index);
      article.setAttribute("aria-hidden", String(index !== state.index));
    });
    previousButton.disabled = state.index === 0;
    nextButton.disabled = state.index === slides.length - 1;
    const percentage = ((state.index + 1) / slides.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progress.setAttribute("aria-valuenow", String(state.index + 1));
    counter.textContent = `${String(state.index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    updateNotes();
  }

  function toggleNotes() {
    state.notesOpen = !state.notesOpen;
    notesPanel.classList.toggle("is-open", state.notesOpen);
    updateNotes();
  }

  function updateNotes() {
    const note = slides[state.index].notes || ui.noNotes;
    const heading = element("strong", "");
    heading.textContent = `${ui.speakerNotes} · ${state.index + 1}/${slides.length}`;
    const paragraph = element("p", "");
    paragraph.textContent = note;
    notesPanel.replaceChildren(heading, paragraph);
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch (_) {
      // Fullscreen can be blocked by embedded browsers; the deck remains usable.
    }
  }

  function replayAnimation() {
    const active = stage.querySelector(".slide.is-active");
    if (!active) return;
    active.classList.remove("is-active");
    void active.offsetWidth;
    active.classList.add("is-active");
  }

  function getInitialIndex() {
    return hashToIndex() ?? 0;
  }

  function hashToIndex() {
    const requested = Number.parseInt(location.hash.replace("#", ""), 10);
    return Number.isFinite(requested) && requested >= 1 && requested <= slides.length
      ? requested - 1
      : null;
  }

  function controlButton(symbol, label) {
    const button = element("button", "deck-button");
    button.type = "button";
    button.textContent = symbol;
    button.setAttribute("aria-label", label);
    button.title = label;
    return button;
  }

  function element(tagName, className) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    return node;
  }
})();
