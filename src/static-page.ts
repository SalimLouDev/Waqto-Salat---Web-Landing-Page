import "./index.css";

document.body.dataset.staticPage = "";

const main = document.querySelector<HTMLElement>("main");

if (main) {
  main.id ||= "main-content";
  main.tabIndex = -1;

  if (!document.querySelector(`a[href="#${main.id}"]`)) {
    const skipLink = document.createElement("a");
    skipLink.href = `#${main.id}`;
    skipLink.className = "skip-link";
    skipLink.textContent = "Skip to content";
    document.body.prepend(skipLink);
  }
}
