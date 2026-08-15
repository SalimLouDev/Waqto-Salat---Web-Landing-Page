import { Bell, Compass, PlayCircle } from "lucide-react";
import { GooglePlayBadge } from "./GooglePlayBadge";
import { MockupSlider } from "./MockupSlider";
import { landingCopy, type LandingLocale } from "../content/landing";

export function Hero({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].hero;
  const textAlignment = locale === "ar" ? "lg:text-right" : "lg:text-left";

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className={`flex-1 min-w-0 w-full text-center ${textAlignment} z-10`}>
          <h1
            className="max-w-[22rem] sm:max-w-2xl mx-auto lg:mx-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-islamic-green leading-tight mb-6 text-balance"
          >
            {copy.titleStart}{" "}
            <span className="italic text-islamic-gold">{copy.titleAccent}</span>.
          </h1>

          <p
            className="text-lg md:text-xl text-muted-green max-w-[21rem] sm:max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            {copy.body}
          </p>

          <div
            className="grid w-full grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 mb-10"
          >
            <div className={`min-w-0 rounded-lg border border-border-light bg-white/70 px-4 py-4 shadow-sm ${locale === "ar" ? "text-right" : "text-left"}`}>
              <Bell className="w-5 h-5 text-islamic-gold mb-3" />
              <div className="text-sm font-semibold text-islamic-green">{copy.cards[0].title}</div>
              <div className="text-xs text-muted-green mt-1">{copy.cards[0].body}</div>
            </div>
            <div className={`min-w-0 rounded-lg border border-border-light bg-white/70 px-4 py-4 shadow-sm ${locale === "ar" ? "text-right" : "text-left"}`}>
              <Compass className="w-5 h-5 text-islamic-gold mb-3" />
              <div className="text-sm font-semibold text-islamic-green">{copy.cards[1].title}</div>
              <div className="text-xs text-muted-green mt-1">{copy.cards[1].body}</div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <GooglePlayBadge locale={locale} />
            <a
              href="#reminders"
              className={`inline-flex min-h-14 min-w-[14rem] max-w-[17rem] items-center justify-center gap-2 rounded-full border border-border-light bg-white px-7 py-3 text-center text-xs font-bold text-islamic-green shadow-sm transition-colors hover:border-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 ${locale === "ar" ? "leading-6" : locale === "fr" ? "leading-5 uppercase tracking-widest" : "whitespace-nowrap uppercase tracking-widest"}`}
            >
              <PlayCircle className="h-4 w-4" />
              {copy.reminderCta}
            </a>
            <p className={`text-xs text-muted-green font-semibold hidden sm:block ${locale === "ar" ? "leading-6" : "uppercase tracking-widest"}`}>{copy.promise}</p>
          </div>
        </div>

        <div className="flex-1 relative w-full min-w-0 max-w-md overflow-hidden lg:max-w-none flex justify-center lg:justify-end">
          <div className="relative w-full min-w-0 flex justify-center items-center">
            <div className="relative z-10">
              <MockupSlider locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
