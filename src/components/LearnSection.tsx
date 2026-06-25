import { ArrowRight, BookOpen, Signpost } from "lucide-react";
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
            Begin with Istikhara, the prayer for seeking Allah's guidance in a decision.
          </p>
        </motion.div>

        <motion.a
          href="/learn/istikhara-prayer/"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group grid gap-6 rounded-lg border border-border-light bg-footer-bg p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-islamic-gold/50 hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:items-center"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-islamic-green text-white">
            <Signpost className="h-6 w-6" />
          </span>
          <span>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-islamic-gold">
              Available now
            </span>
            <span className="block font-display text-2xl font-medium text-islamic-green">
              Istikhara Prayer
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-green">
              When to pray it, how to perform it, what its du'a asks for,
              and why Istikhara does not depend on dreams or signs.
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-islamic-green transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
