import { HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { landingCopy, type LandingLocale } from "../content/landing";

export function FAQSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].faq;
  return (
    <section id="faq" className="px-6 md:px-12 py-24 bg-off-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green mb-6">
            <HelpCircle className="h-4 w-4" />
            {copy.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-islamic-green leading-tight mb-5">
            {copy.title}
          </h2>
          <p className="text-muted-green leading-relaxed">
            {copy.body}
          </p>
        </div>

        <div className="divide-y divide-border-light rounded-lg border border-border-light bg-white shadow-sm">
          {copy.items.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group p-6 open:bg-footer-bg/60"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-islamic-green flex items-center justify-between gap-5">
                {faq.question}
                <span className="text-islamic-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-green">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
