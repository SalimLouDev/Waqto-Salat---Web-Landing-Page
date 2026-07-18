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
import { motion } from "motion/react";
import type { ComponentType } from "react";

type LearnGuide = {
  title: string;
  href: string;
  summary: string;
  Icon: ComponentType<{ className?: string }>;
};

const learnGuides: LearnGuide[] = [
  {
    title: "Five Daily Prayers",
    href: "/learn/five-daily-prayers/",
    summary: "Fajr, Dhuhr, Asr, Maghrib, and Isha.",
    Icon: Clock,
  },
  {
    title: "Istikhara Prayer",
    href: "/learn/istikhara-prayer/",
    summary: "Guidance, du'a, dreams, and signs.",
    Icon: Signpost,
  },
  {
    title: "Sunnah Prayers",
    href: "/learn/sunnah-prayers/",
    summary: "Emphasized and non-emphasized Sunnah.",
    Icon: Repeat,
  },
  {
    title: "Witr Prayer",
    href: "/learn/witr-prayer/",
    summary: "Odd rak'ahs after Isha and before Fajr.",
    Icon: CircleDot,
  },
  {
    title: "Nafl Prayers",
    href: "/learn/nafl-prayers/",
    summary: "Voluntary prayers beyond required salah.",
    Icon: Plus,
  },
  {
    title: "Duha Prayer",
    href: "/learn/duha-prayer/",
    summary: "Forenoon prayer after sunrise.",
    Icon: Sun,
  },
  {
    title: "Tahajjud Prayer",
    href: "/learn/tahajjud-prayer/",
    summary: "Night prayer before Fajr.",
    Icon: Moon,
  },
  {
    title: "Eid al-Fitr and Eid al-Adha",
    href: "/learn/eid-al-fitr-and-eid-al-adha-prayer/",
    summary: "Eid timing, takbirs, and khutbah.",
    Icon: CalendarDays,
  },
  {
    title: "Janazah Prayer",
    href: "/learn/janazah-prayer/",
    summary: "The Muslim funeral prayer.",
    Icon: Heart,
  },
  {
    title: "Eclipse Prayer",
    href: "/learn/eclipse-prayer/",
    summary: "Solar and lunar eclipse salah.",
    Icon: Moon,
  },
  {
    title: "Taraweeh Prayer",
    href: "/learn/taraweeh-prayer/",
    summary: "Ramadan night prayer and Witr.",
    Icon: Sparkles,
  },
];

export function LearnSection() {
  return (
    <section id="learn" className="border-y border-border-light bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green">
            <BookOpen className="h-4 w-4" />
            Learn
          </div>
          <h2 className="mb-4 max-w-xl font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            Learn the prayers that shape Muslim life.
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-green">
            A focused Salah library covering obligatory, Sunnah, voluntary, and special prayers in practical guides.
          </p>
          <a
            href="/learn/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-islamic-green shadow-sm transition-[background-color,border-color,color,box-shadow] hover:border-islamic-green hover:bg-islamic-green hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            View all guides
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
        >
          {learnGuides.map(({ title, href, summary, Icon }, index) => (
            <a
              key={href}
              href={href}
              className={`${index >= 6 ? "hidden sm:flex" : "flex"} group min-h-[136px] flex-col justify-between rounded-lg border border-border-light bg-white p-5 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-islamic-green transition-[color,transform] group-hover:translate-x-1 group-hover:text-white group-focus-visible:text-white" />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
