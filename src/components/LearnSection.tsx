import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CircleDot,
  Clock,
  Heart,
  Moon,
  Plus,
  Repeat,
  Signpost,
  Sparkles,
  Sun,
} from "lucide-react";
import { landingCopy, type LandingLocale } from "../content/landing";

const guideIcons = [
  { slug: "five-daily-prayers", Icon: Clock },
  { slug: "istikhara-prayer", Icon: Signpost },
  { slug: "sunnah-prayers", Icon: Repeat },
  { slug: "witr-prayer", Icon: CircleDot },
  { slug: "nafl-prayers", Icon: Plus },
  { slug: "duha-prayer", Icon: Sun },
  { slug: "tahajjud-prayer", Icon: Moon },
  { slug: "eid-al-fitr", Icon: CalendarDays },
  { slug: "janazah-prayer", Icon: Heart },
  { slug: "eclipse-prayer", Icon: Moon },
  { slug: "taraweeh-prayer", Icon: Sparkles },
];

export function LearnSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].learn;
  return (
    <section id="learn" className="border-y border-border-light bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
        <div
          className="lg:sticky lg:top-28"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green">
            <BookOpen className="h-4 w-4" />
            {copy.label}
          </div>
          <h2 className="mb-4 max-w-xl font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            {copy.title}
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-green">
            {copy.body}
          </p>
          <a
            href={locale === "ar" ? "/ar/learn/" : "/learn/"}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-islamic-green shadow-sm transition-[background-color,border-color,color,box-shadow] hover:border-islamic-green hover:bg-islamic-green hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            {copy.viewAll}
            <ArrowRight className={`h-4 w-4 ${locale === "ar" ? "rotate-180" : ""}`} />
          </a>
        </div>

        <div
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
        >
          {copy.guides.map(({ title, href, summary }, index) => {
            const Icon = guideIcons.find(({ slug }) => href.includes(slug))?.Icon ?? BookOpen;
            return (
            <a
              key={href}
              href={href}
              className={`${index >= 6 ? "hidden sm:flex" : "flex"} group min-h-[136px] flex-col justify-between rounded-lg border border-border-light bg-white p-5 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className={`mt-1 h-4 w-4 shrink-0 text-islamic-green transition-[color,transform] group-hover:text-white group-focus-visible:text-white ${locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </span>
              <span className="mt-5 block">
                <span className="block font-display text-xl font-medium leading-snug text-islamic-green transition-colors group-hover:text-white group-focus-visible:text-white">
                  {title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-green transition-colors group-hover:text-white/78 group-focus-visible:text-white/78">
                  {summary}
                </span>
              </span>
            </a>
          );})}
        </div>
      </div>
    </section>
  );
}
