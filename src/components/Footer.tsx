import { landingCopy, type LandingLocale } from "../content/landing";

export function Footer({ locale = "en" }: { locale?: LandingLocale }) {
  const contactEmail = "contact@waqtosalat.com";
  const copy = landingCopy[locale];
  const homePath = locale === "ar" ? "/ar/" : "/";
  const learnPath = locale === "ar" ? "/ar/learn/" : "/learn/";
  const localePrefix = locale === "ar" ? "/ar" : "";
  const linkClass = "rounded-sm transition-colors hover:text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";

  return (
    <footer className={`border-t border-border-light bg-footer-bg py-12 px-6 md:px-12 ${locale === "ar" ? "text-right" : "text-left"}`}>
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="max-w-md">
          <div className="text-xl font-display font-medium text-islamic-green mb-4">{copy.brandName}</div>
          <p className="text-sm text-muted-green mb-6 leading-relaxed">
            {copy.footer.body}
          </p>
          <div className="text-xs text-muted-green leading-relaxed">
            {copy.footer.seoBody}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 md:justify-self-end">
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">{copy.footer.application}</span>
            <a href={`${homePath}#features`} className={linkClass}>{copy.footer.features}</a>
            <a href={`${homePath}#about`} className={linkClass}>{copy.footer.about}</a>
            <a href={`${homePath}#faq`} className={linkClass}>{copy.footer.faq}</a>
            <a href={`${homePath}#download`} className={`${linkClass} text-islamic-green font-medium`}>{copy.footer.download}</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">{copy.footer.learn}</span>
            <a href={learnPath} className={`${linkClass} font-medium text-islamic-green`}>{copy.footer.learnAbout}</a>
            {copy.learn.guides.map((guide, index) => (
              <a key={guide.href} href={guide.href} className={`${linkClass} ${index >= 6 ? "hidden sm:block" : ""}`}>{guide.title}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">{copy.footer.resources}</span>
            {copy.resources.items.map((resource) => (
              <a key={resource.href} href={resource.href} className={linkClass}>{resource.title}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">{copy.footer.legal}</span>
            <a href={`${localePrefix}/privacy-policy/`} className={linkClass}>{copy.footer.privacy}</a>
            <a href={`${localePrefix}/terms-of-service/`} className={linkClass}>{copy.footer.terms}</a>
            <a href={`${localePrefix}/editorial-methodology/`} className={linkClass}>{copy.footer.methodology}</a>
            <a href={`mailto:${contactEmail}`} className={linkClass}>{copy.footer.contact}</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-muted-green gap-3">
        <p>&copy; {new Date().getFullYear()} {copy.footer.copyright}</p>
        <p>{copy.footer.closing}</p>
      </div>
    </footer>
  );
}
