type SupportedLanguage = "en" | "ar" | "fr";

const preferenceKey = "waqto-salat-language-preference";
const promptId = "language-suggestion";

const suggestions = {
  ar: {
    direction: "rtl",
    title: "العربية متاحة",
    description: "هل تفضل تصفح وقت الصلاة باللغة العربية؟",
    action: "عرض بالعربية",
    stay: "البقاء بالإنجليزية",
  },
  fr: {
    direction: "ltr",
    title: "Le français est disponible",
    description: "Souhaitez-vous consulter Waqto Salat en français ?",
    action: "Afficher en français",
    stay: "Rester en anglais",
  },
} as const;

function isSupportedLanguage(language: string | null): language is SupportedLanguage {
  return language === "en" || language === "ar" || language === "fr";
}

function readPreference(): SupportedLanguage | null {
  try {
    const preference = window.localStorage.getItem(preferenceKey);
    return isSupportedLanguage(preference) ? preference : null;
  } catch {
    return null;
  }
}

function savePreference(language: SupportedLanguage) {
  try {
    window.localStorage.setItem(preferenceKey, language);
  } catch {
    // Language selection still works when storage is unavailable.
  }
}

function currentLanguage(): SupportedLanguage {
  const language = document.documentElement.lang.toLowerCase();
  if (language.startsWith("ar")) return "ar";
  if (language.startsWith("fr")) return "fr";
  return "en";
}

function preferredAlternative(): "ar" | "fr" | null {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const normalized = language.toLowerCase();
    if (normalized.startsWith("ar")) return "ar";
    if (normalized.startsWith("fr")) return "fr";
  }
  return null;
}

function alternatePath(language: "ar" | "fr") {
  const alternate = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${language}"]`,
  );
  if (!alternate) return `/${language}/`;

  try {
    const url = new URL(alternate.href, window.location.href);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return `/${language}/`;
  }
}

function renderSuggestion(language: "ar" | "fr") {
  if (document.getElementById(promptId)) return;

  const copy = suggestions[language];
  const prompt = document.createElement("aside");
  prompt.id = promptId;
  prompt.lang = language;
  prompt.dir = copy.direction;
  prompt.setAttribute("role", "region");
  prompt.setAttribute("aria-labelledby", `${promptId}-title`);
  prompt.className =
    `fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-xl rounded-lg border border-border-light bg-white p-4 ${copy.direction === "rtl" ? "text-right" : "text-left"} text-islamic-green shadow-[0_18px_50px_rgba(10,61,45,0.18)] sm:bottom-6 sm:flex sm:items-center sm:justify-between sm:gap-5`;

  const message = document.createElement("div");
  message.className = "min-w-0";

  const title = document.createElement("p");
  title.id = `${promptId}-title`;
  title.className = "font-display text-xl font-medium";
  title.textContent = copy.title;

  const description = document.createElement("p");
  description.className = "mt-1 text-sm leading-6 text-muted-green";
  description.textContent = copy.description;

  const actions = document.createElement("div");
  actions.className = "mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:shrink-0";

  const languageLink = document.createElement("a");
  languageLink.href = alternatePath(language);
  languageLink.hreflang = language;
  languageLink.lang = language;
  languageLink.className =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-islamic-green px-4 text-sm font-bold text-white hover:bg-islamic-green/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";
  languageLink.textContent = copy.action;

  const stayButton = document.createElement("button");
  stayButton.type = "button";
  stayButton.className =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-border-light px-4 text-sm font-bold text-islamic-green hover:border-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";
  stayButton.textContent = copy.stay;
  stayButton.addEventListener("click", () => {
    savePreference("en");
    prompt.remove();
  });

  message.append(title, description);
  actions.append(languageLink, stayButton);
  prompt.append(message, actions);
  document.body.append(prompt);
}

export function initLanguageSuggestion() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const languageLink = target.closest<HTMLAnchorElement>("a[hreflang]");
    const language = languageLink?.hreflang.toLowerCase().split("-")[0] ?? null;
    if (isSupportedLanguage(language)) savePreference(language);
  });

  const preferred = preferredAlternative();
  if (currentLanguage() !== "en" || readPreference() || !preferred) return;

  window.setTimeout(() => renderSuggestion(preferred), 700);
}
