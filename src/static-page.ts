import "./index.css";
import { initLanguageSuggestion } from "./language-suggestion";

initLanguageSuggestion();

const initWidgetGalleries = () => {
  document.querySelectorAll<HTMLElement>("[data-widget-gallery]").forEach((gallery) => {
    const buttons = Array.from(gallery.querySelectorAll<HTMLButtonElement>("[data-widget-theme]"));
    const images = Array.from(gallery.querySelectorAll<HTMLImageElement>("img[data-light-src][data-dark-src]"));

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.dataset.widgetTheme;

        if (theme !== "light" && theme !== "dark") return;

        buttons.forEach((candidate) => {
          candidate.setAttribute("aria-pressed", String(candidate === button));
        });

        images.forEach((image) => {
          const source = theme === "light" ? image.dataset.lightSrc : image.dataset.darkSrc;
          if (source) image.src = source;
        });
      });
    });
  });
};

initWidgetGalleries();

document.body.dataset.staticPage = "";

const main = document.querySelector<HTMLElement>("main");

if (main) {
  main.id ||= "main-content";
  main.tabIndex = -1;

  if (!document.querySelector(`a[href="#${main.id}"]`)) {
    const skipLink = document.createElement("a");
    skipLink.href = `#${main.id}`;
    skipLink.className = "skip-link";
    const language = document.documentElement.lang.toLowerCase();
    skipLink.textContent = language.startsWith("ar")
      ? "انتقل إلى المحتوى"
      : language.startsWith("fr")
        ? "Aller au contenu"
        : language.startsWith("id")
          ? "Lewati ke konten"
          : "Skip to content";
    document.body.prepend(skipLink);
  }
}
