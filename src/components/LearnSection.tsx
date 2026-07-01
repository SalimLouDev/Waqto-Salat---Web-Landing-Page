import { ArrowRight, BookOpen, CalendarDays, Heart, Moon, Signpost } from "lucide-react";
import { motion } from "motion/react";

export function LearnSection() {
  return (
    <section id="learn" className="border-y border-border-light bg-white px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green">
            <BookOpen className="h-4 w-4" />
            Learn
          </div>
          <h2 className="mb-5 font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            Learn the prayers that shape Muslim life.
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-green">
            A Salah-only library covering obligatory, Sunnah, voluntary, and special prayers.
            Begin with Istikhara, Eid, Janazah, and Eclipse prayer guides, with more Salah topics planned.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4"
        >
          <a
            href="/learn/istikhara-prayer/"
            className="group grid gap-6 rounded-lg border border-border-light bg-white p-7 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
              <Signpost className="h-6 w-6" />
            </span>
            <span>
              <span className="mb-2 inline-flex rounded-full bg-islamic-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-islamic-green transition-colors group-hover:bg-islamic-gold/18 group-hover:text-islamic-gold group-focus-visible:bg-islamic-gold/18 group-focus-visible:text-islamic-gold">
                Available now
              </span>
              <span className="block font-display text-2xl font-medium text-islamic-green transition-colors group-hover:text-white group-focus-visible:text-white">
                Istikhara Prayer
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-green transition-colors group-hover:text-white/78 group-focus-visible:text-white/78">
                When to pray it, how to perform it, what its du'a asks for,
                and why Istikhara does not depend on dreams or signs.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-islamic-green transition-[color,transform] group-hover:translate-x-1 group-hover:text-white group-focus-visible:text-white" />
          </a>

          <a
            href="/learn/eid-al-fitr-and-eid-al-adha-prayer/"
            className="group grid gap-6 rounded-lg border border-border-light bg-white p-7 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
              <CalendarDays className="h-6 w-6" />
            </span>
            <span>
              <span className="mb-2 inline-flex rounded-full bg-islamic-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-islamic-green transition-colors group-hover:bg-islamic-gold/18 group-hover:text-islamic-gold group-focus-visible:bg-islamic-gold/18 group-focus-visible:text-islamic-gold">
                Available now
              </span>
              <span className="block font-display text-2xl font-medium text-islamic-green transition-colors group-hover:text-white group-focus-visible:text-white">
                Eid al-Fitr and Eid al-Adha Prayer
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-green transition-colors group-hover:text-white/78 group-focus-visible:text-white/78">
                A guide to Eid al-Fitr and Eid al-Adha prayer, timing, takbirs,
                khutbah, and common questions.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-islamic-green transition-[color,transform] group-hover:translate-x-1 group-hover:text-white group-focus-visible:text-white" />
          </a>

          <a
            href="/learn/janazah-prayer/"
            className="group grid gap-6 rounded-lg border border-border-light bg-white p-7 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
              <Heart className="h-6 w-6" />
            </span>
            <span>
              <span className="mb-2 inline-flex rounded-full bg-islamic-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-islamic-green transition-colors group-hover:bg-islamic-gold/18 group-hover:text-islamic-gold group-focus-visible:bg-islamic-gold/18 group-focus-visible:text-islamic-gold">
                Available now
              </span>
              <span className="block font-display text-2xl font-medium text-islamic-green transition-colors group-hover:text-white group-focus-visible:text-white">
                Janazah Prayer
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-green transition-colors group-hover:text-white/78 group-focus-visible:text-white/78">
                How the Muslim funeral prayer is offered, what it means,
                and the common questions around attending.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-islamic-green transition-[color,transform] group-hover:translate-x-1 group-hover:text-white group-focus-visible:text-white" />
          </a>

          <a
            href="/learn/eclipse-prayer/"
            className="group grid gap-6 rounded-lg border border-border-light bg-white p-7 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-green hover:bg-islamic-green hover:shadow-md focus:outline-none focus-visible:-translate-y-1 focus-visible:bg-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-islamic-green text-white transition-colors group-hover:bg-white group-hover:text-islamic-green group-focus-visible:bg-white group-focus-visible:text-islamic-green">
              <Moon className="h-6 w-6" />
            </span>
            <span>
              <span className="mb-2 inline-flex rounded-full bg-islamic-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-islamic-green transition-colors group-hover:bg-islamic-gold/18 group-hover:text-islamic-gold group-focus-visible:bg-islamic-gold/18 group-focus-visible:text-islamic-gold">
                Available now
              </span>
              <span className="block font-display text-2xl font-medium text-islamic-green transition-colors group-hover:text-white group-focus-visible:text-white">
                Eclipse Prayer
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-green transition-colors group-hover:text-white/78 group-focus-visible:text-white/78">
                A guide to solar and lunar eclipse salah, its purpose,
                format, and common questions.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-islamic-green transition-[color,transform] group-hover:translate-x-1 group-hover:text-white group-focus-visible:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
