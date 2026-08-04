type SupportedLanguage = "en" | "ar";

const preferenceKey = "waqto-salat-language-preference";
const promptId = "language-suggestion";

function readPreference(): SupportedLanguage | null {
  try {
    const preference = window.localStorage.getItem(preferenceKey);
    return preference === "en" || preference === "ar" ? preference : null;
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
  return document.documentElement.lang.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function browserPrefersArabic() {
  const primaryLanguage = navigator.languages?.[0] ?? navigator.language;
  return primaryLanguage.toLowerCase().startsWith("ar");
}

function arabicAlternatePath() {
  const alternate = document.querySelector<HTMLLinkElement>(
    'link[rel="alternate"][hreflang="ar"]',
  );

  if (!alternate) return "/ar/";

  try {
    const url = new URL(alternate.href, window.location.href);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/ar/";
  }
}

function renderArabicSuggestion() {
  if (document.getElementById(promptId)) return;

  const prompt = document.createElement("aside");
  prompt.id = promptId;
  prompt.lang = "ar";
  prompt.dir = "rtl";
  prompt.setAttribute("role", "region");
  prompt.setAttribute("aria-labelledby", `${promptId}-title`);
  prompt.className =
    "fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-xl rounded-lg border border-border-light bg-white p-4 text-right text-islamic-green shadow-[0_18px_50px_rgba(10,61,45,0.18)] sm:bottom-6 sm:flex sm:items-center sm:justify-between sm:gap-5";

  const message = document.createElement("div");
  message.className = "min-w-0";

  const title = document.createElement("p");
  title.id = `${promptId}-title`;
  title.className = "font-display text-xl font-medium";
  title.textContent = "العربية متاحة";

  const description = document.createElement("p");
  description.className = "mt-1 text-sm leading-6 text-muted-green";
  description.textContent = "هل تفضل تصفح وقت الصلاة باللغة العربية؟";

  const actions = document.createElement("div");
  actions.className = "mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:shrink-0";

  const arabicLink = document.createElement("a");
  arabicLink.href = arabicAlternatePath();
  arabicLink.hreflang = "ar";
  arabicLink.lang = "ar";
  arabicLink.className =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-islamic-green px-4 text-sm font-bold text-white hover:bg-islamic-green/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";
  arabicLink.textContent = "عرض بالعربية";

  const englishButton = document.createElement("button");
  englishButton.type = "button";
  englishButton.className =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-border-light px-4 text-sm font-bold text-islamic-green hover:border-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";
  englishButton.textContent = "البقاء بالإنجليزية";
  englishButton.addEventListener("click", () => {
    savePreference("en");
    prompt.remove();
  });

  message.append(title, description);
  actions.append(arabicLink, englishButton);
  prompt.append(message, actions);
  document.body.append(prompt);
}

export function initLanguageSuggestion() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const languageLink = target.closest<HTMLAnchorElement>("a[hreflang]");
    const language = languageLink?.hreflang.toLowerCase().split("-")[0];
    if (language === "en" || language === "ar") savePreference(language);
  });

  if (currentLanguage() !== "en" || readPreference() || !browserPrefersArabic()) return;

  window.setTimeout(renderArabicSuggestion, 700);
}
