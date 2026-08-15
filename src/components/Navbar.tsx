import { ChevronDown, Download } from "lucide-react";
import { assetPath } from "../lib/assets";
import { landingCopy, type LandingLocale } from "../content/landing";

export function Navbar({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale];
  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const homePath = `${localePrefix}/`;
  const learnPath = `${localePrefix}/learn/`;
  const languageLinks = [
    { locale: "en", href: "/", name: "English", shortName: "EN" },
    { locale: "ar", href: "/ar/", name: "العربية", shortName: "AR" },
    { locale: "fr", href: "/fr/", name: "Français", shortName: "FR" },
  ].filter((language) => language.locale !== locale);
  const navLinks = [
    { href: "#features", label: copy.navigation.features },
    { href: "#about", label: copy.navigation.about },
    { href: "#faq", label: copy.navigation.faq },
  ];

  const learnLinks = [
    { href: learnPath, label: copy.navigation.allGuides },
    ...copy.learn.guides.map(({ href, title }) => ({ href, label: title })),
  ];

  return (
    <nav
      aria-label={copy.navigation.ariaLabel}
      className="fixed top-0 inset-x-0 z-[100] bg-off-white/95 backdrop-blur-xl border-b border-border-light/80 shadow-[0_10px_24px_rgba(10,61,45,0.035)]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-3 sm:gap-4">
        <a href={homePath} className="min-w-0 flex items-center gap-3 text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full">
          <img src={assetPath("logo-64.webp")} alt={copy.logoAlt} width="32" height="32" className="w-8 h-8 rounded-full object-cover" />
          <span className="hidden truncate whitespace-nowrap font-display text-xl font-medium min-[360px]:block sm:text-2xl">{copy.brandName}</span>
        </a>
        
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-muted-green">
          <div className="group relative">
            <a
              href={learnPath}
              className="relative inline-flex items-center gap-1.5 rounded-full py-2 transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:w-0 after:bg-islamic-gold after:transition-[width] after:duration-200 hover:text-islamic-green hover:after:w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 group-hover:text-islamic-green"
            >
              {copy.navigation.learn}
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </a>
            <div className="invisible absolute left-1/2 top-full z-[120] w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility,transform] duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-lg border border-border-light bg-white p-3 shadow-[0_18px_44px_rgba(10,61,45,0.14)]">
                <div className="grid grid-cols-2 gap-1">
                  {learnLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-green transition-colors hover:bg-footer-bg hover:text-islamic-green focus:outline-none focus-visible:bg-footer-bg focus-visible:text-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 hover:text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:w-0 after:bg-islamic-gold after:transition-[width] after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {languageLinks.map((language) => (
            <a
              key={language.locale}
              href={language.href}
              hrefLang={language.locale}
              lang={language.locale}
              aria-label={`${copy.navigation.languageLabel}: ${language.name}`}
              className="rounded-full border border-border-light px-2.5 py-2 text-xs font-bold text-islamic-green transition-colors hover:border-islamic-gold focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:px-3"
            >
              <span className="hidden lg:inline">{language.name}</span>
              <span className="lg:hidden">{language.shortName}</span>
            </a>
          ))}
          <a
            href="#download"
            aria-label={copy.navigation.download}
            className="bg-islamic-green text-white hover:bg-islamic-green-hover px-3 sm:px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-[background-color,box-shadow] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            <Download className="hidden sm:block h-4 w-4" />
            <span className="sm:hidden">{locale === "fr" ? "App" : copy.navigation.getApp}</span>
            <span className="hidden sm:inline">{copy.navigation.download}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
