(function () {
  "use strict";

  const catalog = window.STUDIO_VIDEO_DECKS;
  const labels = {
    "pt-BR": {
      section: "Série em português",
      count: "9 vídeos · 45 minutos",
      path: "pt-BR"
    },
    "en": {
      section: "Series in English",
      count: "9 videos · 45 minutes",
      path: "en"
    },
    "es": {
      section: "Serie en español",
      count: "9 vídeos · 45 minutos",
      path: "es"
    }
  };

  Object.entries(labels).forEach(([locale, copy]) => {
    const mount = document.querySelector(`[data-playlist="${locale}"]`);
    const language = catalog.locales[locale];
    const list = document.createElement("ol");
    list.className = "playlist";

    language.moduleOrder.forEach((moduleId) => {
      const module = language.modules[moduleId];
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `${copy.path}/${module.slug}`;
      link.setAttribute("aria-label", `${module.number}. ${module.title}, ${module.duration}`);

      const number = part("span", "playlist__number", module.number);
      const title = part("span", "playlist__title", module.title);
      const promise = part("span", "playlist__promise", module.promise);
      const duration = part("span", "playlist__duration", module.duration);
      link.append(number, title, promise, duration);
      item.append(link);
      list.append(item);
    });

    mount.querySelector("h2").textContent = copy.section;
    mount.querySelector(".series__count").textContent = copy.count;
    mount.append(list);
  });

  function part(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    return node;
  }
})();
