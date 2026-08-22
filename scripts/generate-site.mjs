import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const siteUrl = "https://waqtosalat.com";
const contentRoot = path.join(root, "content");
const learnRoot = path.join(contentRoot, "learn");
const pagesRoot = path.join(contentRoot, "pages");
const shouldCheck = process.argv.includes("--check");
const generatedFiles = [];
const changedFiles = [];

const locales = JSON.parse(await readFile(path.join(contentRoot, "locales.json"), "utf8"));
const staticSitemapEntries = JSON.parse(
  await readFile(path.join(contentRoot, "sitemap-static.json"), "utf8"),
);
const relatedGuideKeys = {
  "five-daily-prayers": ["sunnah-prayers", "witr-prayer", "nafl-prayers"],
  "sunnah-prayers": ["five-daily-prayers", "nafl-prayers", "witr-prayer"],
  "witr-prayer": ["tahajjud-prayer", "sunnah-prayers", "nafl-prayers"],
  "nafl-prayers": ["five-daily-prayers", "duha-prayer", "tahajjud-prayer", "istikhara-prayer"],
  "duha-prayer": ["nafl-prayers", "tahajjud-prayer", "sunnah-prayers"],
  "tahajjud-prayer": ["nafl-prayers", "witr-prayer", "five-daily-prayers"],
  "istikhara-prayer": ["nafl-prayers", "five-daily-prayers", "tahajjud-prayer"],
  "eid-al-fitr-and-eid-al-adha-prayer": ["five-daily-prayers", "nafl-prayers", "janazah-prayer"],
  "janazah-prayer": ["five-daily-prayers", "eid-al-fitr-and-eid-al-adha-prayer", "eclipse-prayer"],
  "eclipse-prayer": ["nafl-prayers", "five-daily-prayers", "janazah-prayer"],
  "taraweeh-prayer": ["witr-prayer", "tahajjud-prayer", "sunnah-prayers"],
};
const resourcePageKeys = new Set([
  "ad-free-prayer-times-app",
  "salah-reminder-app",
  "qibla-compass-app",
  "prayer-times-widget-android",
  "how-prayer-times-are-calculated",
]);
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.salimloudev.waqtosalat";

function hasDownloadCta(page) {
  return resourcePageKeys.has(page.key)
    || (page.type === "guide" && ["en", "fr", "ar"].includes(page.locale));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function indent(value, spaces) {
  const padding = " ".repeat(spaces);
  return value
    .trim()
    .split(/\r?\n/)
    .map((line) => `${padding}${line}`)
    .join("\n");
}

function localePath(locale, routePath) {
  const prefix = locales[locale].pathPrefix;
  if (!prefix) return routePath;
  if (routePath === "/") return `${prefix}/`;
  return `${prefix}${routePath}`;
}

function absoluteUrl(route) {
  return `${siteUrl}${route}`;
}

function jsonForHtml(value) {
  return JSON.stringify(value, null, 2).replaceAll("</script", "<\\/script");
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function writeGenerated(relativePath, value) {
  const target = path.join(root, relativePath);
  const normalized =
    value
      .replaceAll("\r\n", "\n")
      .split("\n")
      .map((line) => line.trimEnd())
      .join("\n")
      .trimEnd() + "\n";
  const current = (await exists(target)) ? (await readFile(target, "utf8")).replaceAll("\r\n", "\n") : null;
  generatedFiles.push(relativePath.replaceAll("\\", "/"));
  if (current === normalized) return;
  changedFiles.push(relativePath.replaceAll("\\", "/"));
  if (shouldCheck) return;
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, normalized);
}

async function loadPages() {
  const pages = [];
  for (const sourceRoot of [learnRoot, pagesRoot]) {
    for (const locale of Object.keys(locales)) {
      const localeDir = path.join(sourceRoot, locale);
      if (!(await exists(localeDir))) continue;
      for (const entry of await readdir(localeDir, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
        const sourceFile = path.join(localeDir, entry.name);
        const page = JSON.parse(await readFile(sourceFile, "utf8"));
        if (page.locale !== locale) {
          throw new Error(`${entry.name} declares locale ${page.locale}; expected ${locale}`);
        }
        if (!page.routePath.startsWith("/") || !page.routePath.endsWith("/")) {
          throw new Error(`${entry.name} must use a routePath that starts and ends with /`);
        }
        page.sourceDir = localeDir;
        page.sourceFile = path.relative(root, sourceFile).replaceAll("\\", "/");
        page.route = localePath(locale, page.routePath);
        page.canonical = absoluteUrl(page.route);
        pages.push(page);
      }
    }
  }

  const routes = new Set();
  for (const page of pages) {
    if (routes.has(page.route)) throw new Error(`Duplicate generated route: ${page.route}`);
    routes.add(page.route);
  }
  return pages;
}

function localizedContentPath(locale, routePath) {
  return absoluteUrl(localePath(locale, routePath));
}

function buildGuideSchema(page) {
  const data = page.structuredData;
  const article = {
    "@type": "Article",
    "@id": `${page.canonical}#article`,
    headline: data.headline,
    ...(data.alternativeHeadline ? { alternativeHeadline: data.alternativeHeadline } : {}),
    description: data.description,
    inLanguage: locales[page.locale].htmlLang,
    image: `${siteUrl}/og-image-v4.jpg`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Organization",
      name: "Waqto Salat",
      url: `${siteUrl}/`,
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@id": `${page.canonical}#webpage` },
    citation: data.citations,
  };
  const graph = [
    article,
    {
      "@type": "WebPage",
      "@id": `${page.canonical}#webpage`,
      url: page.canonical,
      name: data.headline,
      inLanguage: locales[page.locale].htmlLang,
      datePublished: data.datePublished,
      dateModified: data.dateModified,
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${page.canonical}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${page.canonical}#breadcrumb`,
      itemListElement: data.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: localizedContentPath(page.locale, item.path),
      })),
    },
  ];

  if (data.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${page.canonical}#faq`,
      inLanguage: locales[page.locale].htmlLang,
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function buildCollectionSchema(page) {
  const data = page.structuredData;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${page.canonical}#webpage`,
        url: page.canonical,
        name: data.name,
        description: data.description,
        inLanguage: locales[page.locale].htmlLang,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${page.canonical}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: data.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: localizedContentPath(page.locale, item.path),
            name: item.name,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${page.canonical}#breadcrumb`,
        itemListElement: data.breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: localizedContentPath(page.locale, item.path),
        })),
      },
    ],
  };
}

function buildStaticSchema(page) {
  const data = page.structuredData;
  const primary = {
    "@type": data.schemaType ?? "WebPage",
    "@id": `${page.canonical}#webpage`,
    url: page.canonical,
    name: data.name,
    description: data.description,
    inLanguage: locales[page.locale].htmlLang,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    isPartOf: { "@id": `${siteUrl}/#website` },
    breadcrumb: { "@id": `${page.canonical}#breadcrumb` },
  };
  if (data.schemaType === "Article") {
    primary.headline = data.name;
    primary.image = `${siteUrl}/og-image-v4.jpg`;
    primary.author = { "@type": "Organization", name: "Waqto Salat", url: `${siteUrl}/` };
    primary.publisher = { "@id": `${siteUrl}/#organization` };
    primary.mainEntityOfPage = { "@id": `${page.canonical}#webpage` };
    if (data.citations?.length) primary.citation = data.citations;
  }

  const graph = [
    primary,
    {
      "@type": "BreadcrumbList",
      "@id": `${page.canonical}#breadcrumb`,
      itemListElement: data.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: localizedContentPath(page.locale, item.path),
      })),
    },
  ];
  if (data.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${page.canonical}#faq`,
      inLanguage: locales[page.locale].htmlLang,
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function variantsFor(page, variantsByKey) {
  const variants = new Map(
    (variantsByKey.get(page.key) ?? []).map((variant) => [variant.locale, variant]),
  );
  for (const alternate of page.alternates ?? []) {
    variants.set(alternate.locale, {
      locale: alternate.locale,
      route: alternate.route,
      canonical: absoluteUrl(alternate.route),
    });
  }
  return [...variants.values()];
}

function renderAlternates(page, variants) {
  if (variants.length < 2) return "";
  const links = variants
    .map((variant) => {
      const lang = locales[variant.locale].htmlLang;
      return `    <link rel="alternate" hreflang="${escapeHtml(lang)}" href="${escapeHtml(variant.canonical)}" />`;
    })
    .join("\n");
  const fallback = variants.find((variant) => variant.locale === "en") ?? variants[0];
  return `${links}\n    <link rel="alternate" hreflang="x-default" href="${escapeHtml(fallback.canonical)}" />`;
}

function renderHead(page, variants) {
  const locale = locales[page.locale];
  const seo = page.seo;
  const alternates = renderAlternates(page, variants);
  const alternateLocales = variants
    .filter((variant) => variant.locale !== page.locale)
    .map((variant) => `    <meta property="og:locale:alternate" content="${escapeHtml(locales[variant.locale].ogLocale)}" />`)
    .join("\n");
  const schema =
    page.type === "guide"
      ? buildGuideSchema(page)
      : page.type === "collection"
        ? buildCollectionSchema(page)
        : page.type === "static"
          ? buildStaticSchema(page)
          : page.schema;

  return `  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0A3D2D" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="canonical" href="${escapeHtml(page.canonical)}" />
${alternates ? `${alternates}\n` : ""}    <meta property="og:type" content="${escapeHtml(seo.ogType)}" />
    <meta property="og:title" content="${escapeHtml(seo.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(seo.ogDescription)}" />
    <meta property="og:url" content="${escapeHtml(page.canonical)}" />
    <meta property="og:image" content="${siteUrl}/og-image-v4.jpg" />
    <meta property="og:image:secure_url" content="${siteUrl}/og-image-v4.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(seo.ogImageAlt)}" />
    <meta property="og:site_name" content="Waqto Salat" />
    <meta property="og:locale" content="${escapeHtml(locale.ogLocale)}" />
${alternateLocales ? `${alternateLocales}\n` : ""}    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.twitterTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.twitterDescription)}" />
    <meta name="twitter:image" content="${siteUrl}/og-image-v4.jpg" />
    <meta name="twitter:image:alt" content="${escapeHtml(seo.twitterImageAlt)}" />
    <title>${escapeHtml(seo.title)}</title>
    <script type="application/ld+json">
${indent(jsonForHtml(schema), 6)}
    </script>
  </head>`;
}

function renderLanguageLinks(page, variants) {
  const alternatives = variants.filter((variant) => variant.locale !== page.locale);
  if (!alternatives.length) return "";
  const currentLocale = locales[page.locale];
  return alternatives
    .map((variant) => {
      const locale = locales[variant.locale];
      const ariaLabel = currentLocale.navigation.viewInLanguage.replace("{language}", locale.languageName);
      return `<a href="${escapeHtml(variant.route)}" hreflang="${escapeHtml(locale.htmlLang)}" lang="${escapeHtml(locale.htmlLang)}" class="rounded-full border border-border-light px-3 py-2 text-xs font-bold text-islamic-green hover:border-islamic-gold" aria-label="${escapeHtml(ariaLabel)}"><span class="hidden sm:inline">${escapeHtml(locale.languageName)}</span><span class="sm:hidden">${escapeHtml(locale.shortLanguageName)}</span></a>`;
    })
    .join("\n            ");
}

function renderMobileDownloadBadge(page) {
  if (!hasDownloadCta(page)) return "";
  const copy = locales[page.locale].downloadCard;
  const sideClass = locales[page.locale].direction === "rtl" ? "left-5" : "right-5";
  return `
      <a
        href="${playStoreUrl}"
        aria-label="${escapeHtml(copy.mobileAriaLabel)}"
        class="fixed bottom-5 ${sideClass} z-[90] inline-flex h-14 w-36 items-center justify-center overflow-hidden rounded-lg bg-black shadow-[0_12px_28px_rgba(10,61,45,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40 lg:hidden"
      >
        <picture>
          <source srcset="/google-play-badge-260.webp" type="image/webp" />
          <img src="/google-play-badge.png" alt="${escapeHtml(copy.badgeAlt)}" width="260" height="101" decoding="async" class="h-auto w-full" />
        </picture>
      </a>`;
}

function renderDownloadCard(page) {
  if (!hasDownloadCta(page)) return "";
  const locale = locales[page.locale];
  const copy = locale.downloadCard;
  const labelClass = locale.direction === "rtl" ? "" : "uppercase tracking-widest";
  const trustClass = locale.direction === "rtl" ? "" : "uppercase tracking-wider";
  return `
    <div class="mt-8 hidden rounded-lg border border-islamic-gold/35 bg-white p-5 text-center shadow-sm lg:block">
      <p class="text-xs font-bold ${labelClass} text-islamic-gold">${escapeHtml(copy.eyebrow)}</p>
      <p class="mt-3 font-display text-xl font-medium leading-7 text-islamic-green">${escapeHtml(copy.heading)}</p>
      <p class="mt-2 text-sm leading-6 text-muted-green">${escapeHtml(copy.body)}</p>
      <a href="${playStoreUrl}" aria-label="${escapeHtml(copy.desktopAriaLabel)}" class="mt-5 inline-flex rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/35">
        <picture>
          <source srcset="/google-play-badge-260.webp" type="image/webp" />
          <img src="/google-play-badge.png" alt="${escapeHtml(copy.badgeAlt)}" width="260" height="101" loading="lazy" decoding="async" class="h-auto w-[10.5rem]" />
        </picture>
      </a>
      <p class="mt-3 text-xs font-semibold ${trustClass} text-islamic-green">${escapeHtml(copy.trust)}</p>
    </div>`;
}

function renderHeader(page, variants) {
  const locale = locales[page.locale];
  const navigation = locale.navigation;
  const homePath = localePath(page.locale, "/");
  const learnPath = localePath(page.locale, "/learn/");
  const resourcesPath = `${homePath}#resources`;
  const languageLinks = renderLanguageLinks(page, variants);
  const homeClass = page.type === "landing" ? "text-islamic-green" : "hover:text-islamic-green";
  const learnClass = page.type === "landing" ? "hover:text-islamic-green" : "text-islamic-green";
  const appButtonClass = locale.direction === "rtl" ? "" : "uppercase tracking-widest";
  const appButtonVisibilityClass = hasDownloadCta(page) ? "hidden lg:inline-flex " : "";
  const compactAppLabel = page.locale === "fr" ? "App" : navigation.getApp;
  return `      <header class="fixed top-0 inset-x-0 z-[100] border-b border-border-light/80 bg-off-white/95 shadow-[0_10px_24px_rgba(10,61,45,0.035)] backdrop-blur-xl">
        <div class="mx-auto flex h-20 max-w-7xl w-full items-center justify-between gap-3 px-4 sm:px-6 md:px-12">
          <a href="${escapeHtml(homePath)}" class="inline-flex min-w-0 items-center gap-3 rounded-full text-islamic-green">
            <img src="/logo-64.webp" alt="${escapeHtml(locale.logoAlt)}" width="32" height="32" class="h-8 w-8 rounded-full object-cover" />
            <span class="truncate whitespace-nowrap font-display text-xl font-medium sm:text-2xl">${escapeHtml(locale.brandName)}</span>
          </a>
          <nav aria-label="${escapeHtml(navigation.ariaLabel)}" class="hidden items-center gap-7 text-sm font-semibold text-muted-green md:flex">
            <a href="${escapeHtml(homePath)}" class="${homeClass}">${escapeHtml(navigation.home)}</a>
            <a href="${escapeHtml(learnPath)}" class="${learnClass}">${escapeHtml(navigation.learn)}</a>
            <a href="${escapeHtml(resourcesPath)}" class="hover:text-islamic-green">${escapeHtml(navigation.resources)}</a>
          </nav>
          <div class="flex shrink-0 items-center gap-2">
            ${languageLinks ? `${languageLinks}\n            ` : ""}<a href="${playStoreUrl}" aria-label="${escapeHtml(navigation.getApp)}" class="${appButtonVisibilityClass}rounded-full bg-islamic-green px-4 py-3 text-xs font-bold ${appButtonClass} text-white"><span class="sm:hidden">${escapeHtml(compactAppLabel)}</span><span class="hidden sm:inline">${escapeHtml(navigation.getApp)}</span></a>
          </div>
        </div>
      </header>`;
}

function renderFooter(page) {
  const locale = locales[page.locale];
  const labels = locale.footer;
  return `      <footer class="border-t border-border-light bg-footer-bg px-6 py-10 md:px-12">
        <div class="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-green md:flex-row md:items-center md:justify-between">
          <p>${escapeHtml(labels.copyright)}</p>
          <div class="flex flex-wrap gap-4">
            <a href="${escapeHtml(localePath(page.locale, "/learn/"))}" class="hover:text-islamic-green">${escapeHtml(labels.learn)}</a>
            <a href="${escapeHtml(localePath(page.locale, "/privacy-policy/"))}" class="hover:text-islamic-green">${escapeHtml(labels.privacy)}</a>
            <a href="${escapeHtml(localePath(page.locale, "/terms-of-service/"))}" class="hover:text-islamic-green">${escapeHtml(labels.terms)}</a>
            <a href="${escapeHtml(localePath(page.locale, "/editorial-methodology/"))}" class="hover:text-islamic-green">${escapeHtml(labels.methodology)}</a>
            <a href="mailto:contact@waqtosalat.com" class="hover:text-islamic-green">${escapeHtml(labels.contact)}</a>
          </div>
        </div>
      </footer>`;
}

function renderRelatedGuides(page, pages) {
  const keys = relatedGuideKeys[page.key] ?? [];
  const relatedPages = keys
    .map((key) => pages.find((candidate) => candidate.locale === page.locale && candidate.key === key))
    .filter(Boolean);
  if (!relatedPages.length) return "";

  const collection = pages.find(
    (candidate) => candidate.locale === page.locale && candidate.type === "collection",
  );
  const labelsByPath = new Map(
    (collection?.structuredData?.items ?? []).map((item) => [item.path, item.name]),
  );
  const labels = locales[page.locale].relatedGuides;
  const eyebrowClass = locales[page.locale].direction === "rtl" ? "" : "uppercase tracking-widest";
  const links = relatedPages
    .map((relatedPage) => {
      const label = labelsByPath.get(relatedPage.routePath) ?? relatedPage.structuredData.headline;
      return `                  <a href="${escapeHtml(relatedPage.route)}" class="rounded-lg border border-border-light bg-white px-5 py-4 font-semibold text-islamic-green hover:border-islamic-gold hover:bg-islamic-green hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30">${escapeHtml(label)}</a>`;
    })
    .join("\n");

  return `
              <section aria-labelledby="related-guides-heading" class="rounded-lg border border-border-light bg-footer-bg p-6 md:p-8">
                <p class="mb-3 text-xs font-bold ${eyebrowClass} text-islamic-gold-text">${escapeHtml(labels.eyebrow)}</p>
                <h2 id="related-guides-heading" class="font-display text-3xl font-medium text-islamic-green">${escapeHtml(labels.heading)}</h2>
                <nav aria-label="${escapeHtml(labels.ariaLabel)}" class="mt-6 grid gap-3 sm:grid-cols-2">
${links}
                </nav>
              </section>`;
}

async function renderGuide(page, variants, pages) {
  const article = (await readFile(path.join(page.sourceDir, page.articleFile), "utf8"))
    .replace(/^(?:<!-- Article content[^>]*-->\s*)+/, "");
  for (const item of page.contents.items) {
    const id = item.href.startsWith("#") ? item.href.slice(1) : null;
    if (id && !article.includes(`id="${id}"`)) {
      throw new Error(`${page.key}: contents link ${item.href} has no matching article section`);
    }
  }
  const contents = page.contents.items
    .map((item) => `                <a href="${escapeHtml(item.href)}" class="hover:text-islamic-green">${escapeHtml(item.label)}</a>`)
    .join("\n");
  const guideHasDownloadCta = hasDownloadCta(page);
  const asideClass = guideHasDownloadCta
    ? "text-sm text-muted-green lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pr-2"
    : "text-sm text-muted-green lg:sticky lg:top-28 lg:self-start";

  return `<!doctype html>
<!-- Generated by scripts/generate-site.mjs. Edit content/learn/${page.locale}/${page.key}.json and its article file. -->
<html lang="${escapeHtml(locales[page.locale].htmlLang)}" dir="${escapeHtml(locales[page.locale].direction)}">
${renderHead(page, variants)}
  <body>
    <div class="min-h-screen bg-off-white font-sans text-islamic-green">
${renderHeader(page, variants)}${renderMobileDownloadBadge(page)}

      <main class="content-page pt-20">
        <section class="bg-islamic-green px-6 py-20 text-white md:px-12 md:py-28">
          <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p class="mb-5 text-sm font-semibold uppercase tracking-widest text-islamic-gold">${escapeHtml(page.hero.eyebrow)}</p>
              <h1 class="max-w-4xl font-display text-4xl font-medium leading-tight md:text-6xl">
${indent(page.hero.titleHtml, 16)}
              </h1>
              <p class="mt-6 max-w-3xl text-lg leading-8 text-white/82">
${indent(page.hero.introductionHtml, 16)}
              </p>
            </div>
            <div class="rounded-lg border border-white/12 bg-white/8 p-6">
              <p class="mb-3 text-xs font-bold uppercase tracking-widest text-islamic-gold">${escapeHtml(page.hero.summaryLabel)}</p>
${indent(page.hero.summaryHtml, 14)}
            </div>
          </div>
        </section>

        <section class="px-6 py-16 md:px-12 md:py-24">
          <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <aside class="${asideClass}">
              <p class="mb-5 text-xs font-bold uppercase tracking-widest text-islamic-gold-text">${escapeHtml(page.contents.label)}</p>
              <nav aria-label="${escapeHtml(page.contents.ariaLabel)}" class="flex flex-col gap-3">
${contents}
              </nav>
              <div class="mt-8 border-t border-border-light pt-6">
${indent(page.asideMetaHtml, 16)}
              </div>${guideHasDownloadCta ? `\n${indent(renderDownloadCard(page), 14)}` : ""}
            </aside>

            <article class="min-w-0 space-y-14 text-base leading-8 text-muted-green">
${indent(article, 14)}
${renderRelatedGuides(page, pages)}
            </article>
          </div>
        </section>
      </main>

${renderFooter(page)}
    </div>
    <script type="module" src="/src/static-page.ts"></script>
  </body>
</html>`;
}

async function renderCollection(page, variants) {
  const main = await readFile(path.join(page.sourceDir, page.mainFile), "utf8");
  return `<!doctype html>
<!-- Generated by scripts/generate-site.mjs. Edit content/learn/${page.locale}/index.json and its main content file. -->
<html lang="${escapeHtml(locales[page.locale].htmlLang)}" dir="${escapeHtml(locales[page.locale].direction)}">
${renderHead(page, variants)}
  <body>
    <div class="min-h-screen bg-off-white font-sans text-islamic-green">
${renderHeader(page, variants)}

      <main class="content-page pt-20">
${indent(main, 8)}
      </main>

${renderFooter(page)}
    </div>
    <script type="module" src="/src/static-page.ts"></script>
  </body>
</html>`;
}

async function renderStaticPage(page, variants) {
  let main = await readFile(path.join(page.sourceDir, page.mainFile), "utf8");
  if (resourcePageKeys.has(page.key)) {
    if (page.key === "how-prayer-times-are-calculated") {
      main = main.replace(
        "lg:sticky lg:top-28 lg:self-start",
        "lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pr-2",
      );
    }
    main = main.replace("</aside>", `${renderDownloadCard(page)}\n  </aside>`);
  }
  return `<!doctype html>
<!-- Generated by scripts/generate-site.mjs. Edit ${page.sourceFile} and its main content file. -->
<html lang="${escapeHtml(locales[page.locale].htmlLang)}" dir="${escapeHtml(locales[page.locale].direction)}">
${renderHead(page, variants)}
  <body>
    <div class="min-h-screen bg-off-white font-sans text-islamic-green">
${renderHeader(page, variants)}${renderMobileDownloadBadge(page)}

      <main id="main-content" class="content-page pt-20">
${indent(main, 8)}
      </main>

${renderFooter(page)}
    </div>
    <script type="module" src="/src/static-page.ts"></script>
  </body>
</html>`;
}

async function renderLanding(page, variants) {
  const main = await readFile(path.join(page.sourceDir, page.mainFile), "utf8");
  const skipLabel = page.locale === "ar"
    ? "انتقل إلى المحتوى"
    : page.locale === "fr"
      ? "Aller au contenu"
      : "Skip to content";
  return `<!doctype html>
<!-- Generated by scripts/generate-site.mjs. Edit ${page.sourceFile} and its main content file. -->
<html lang="${escapeHtml(locales[page.locale].htmlLang)}" dir="${escapeHtml(locales[page.locale].direction)}">
${renderHead(page, variants)}
  <body>
    <a href="#main" class="skip-link">${skipLabel}</a>
    <div id="root">
      <main id="main" tabindex="-1">
${indent(main, 8)}
      </main>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function sitemapOrder(pages) {
  const collection = pages.find((page) => page.locale === "en" && page.type === "collection");
  const guideOrder = new Map(collection.structuredData.items.map((item, index) => [item.path, index]));
  const typeOrder = { landing: 0, collection: 1, guide: 2, static: 3 };
  return [...pages].sort((a, b) => {
    if (a.locale !== b.locale) return Object.keys(locales).indexOf(a.locale) - Object.keys(locales).indexOf(b.locale);
    if (a.type !== b.type) return typeOrder[a.type] - typeOrder[b.type];
    return (guideOrder.get(a.routePath) ?? 999) - (guideOrder.get(b.routePath) ?? 999);
  });
}

function renderSitemap(pages, variantsByKey) {
  const home = staticSitemapEntries.find((entry) => entry.path === "/");
  const otherStatic = staticSitemapEntries.filter((entry) => entry.path !== "/");
  const entries = [home, ...sitemapOrder(pages), ...otherStatic];
  const hasAlternates = pages.some((page) => variantsFor(page, variantsByKey).length > 1)
    || staticSitemapEntries.some((entry) => (entry.alternates?.length ?? 0) > 1);
  const namespace = hasAlternates ? ' xmlns:xhtml="http://www.w3.org/1999/xhtml"' : "";
  const xml = entries
    .map((entry) => {
      const isGenerated = "canonical" in entry;
      const url = isGenerated ? entry.canonical : absoluteUrl(entry.path);
      const sitemap = isGenerated ? entry.sitemap : entry;
      const variants = isGenerated
        ? variantsFor(entry, variantsByKey)
        : (entry.alternates ?? []).map((alternate) => ({
            locale: alternate.locale,
            canonical: absoluteUrl(alternate.route),
          }));
      const alternates = variants.length > 1
        ? `\n${[
            ...variants.map((variant) => ({
              hreflang: locales[variant.locale].htmlLang,
              canonical: variant.canonical,
            })),
            {
              hreflang: "x-default",
              canonical: (variants.find((variant) => variant.locale === "en") ?? variants[0]).canonical,
            },
          ]
            .map((variant) => `    <xhtml:link rel="alternate" hreflang="${escapeHtml(variant.hreflang)}" href="${escapeHtml(variant.canonical)}" />`)
            .join("\n")}`
        : "";
      return `  <url>\n    <loc>${escapeHtml(url)}</loc>${alternates}\n    <lastmod>${escapeHtml(sitemap.lastmod)}</lastmod>\n    <changefreq>${escapeHtml(sitemap.changefreq)}</changefreq>\n    <priority>${escapeHtml(sitemap.priority)}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${namespace}>\n${xml}\n</urlset>`;
}

const pages = await loadPages();
const variantsByKey = Map.groupBy(pages, (page) => page.key);

for (const page of pages) {
  const variants = variantsFor(page, variantsByKey);
  const html =
    page.type === "guide"
      ? await renderGuide(page, variants, pages)
      : page.type === "collection"
        ? await renderCollection(page, variants)
        : page.type === "static"
          ? await renderStaticPage(page, variants)
          : await renderLanding(page, variants);
  const output = path.join(page.route.slice(1), "index.html");
  await writeGenerated(output, html);
}

await writeGenerated(path.join("public", "sitemap.xml"), renderSitemap(pages, variantsByKey));

if (shouldCheck && changedFiles.length) {
  console.error(`Generated files are out of date:\n${changedFiles.map((file) => `- ${file}`).join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(
    changedFiles.length
      ? `Generated ${changedFiles.length} updated file(s).`
      : `Generated content is current (${generatedFiles.length} files checked).`,
  );
}
