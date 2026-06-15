import { HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const faqs = [
  {
    question: "Is Waqto Salat free?",
    answer:
      "Yes. Waqto Salat is free to download and built around prayer essentials without ads or premium subscriptions.",
  },
  {
    question: "Does Waqto Salat show ads?",
    answer:
      "No. Waqto Salat is designed as an ad-free prayer companion for Android.",
  },
  {
    question: "What features does Waqto Salat include?",
    answer:
      "Waqto Salat includes prayer times, dynamic salah reminders, Qibla direction, home screen widgets, per-prayer calibration, and multilingual support.",
  },
  {
    question: "Can I set reminders before prayer time?",
    answer:
      "Yes. Waqto Salat lets you create reminders before salah times so you can prepare for Fajr, Dhuhr, Asr, Maghrib, or Isha.",
  },
  {
    question: "Can I set reminders after prayer time?",
    answer:
      "Yes. You can use reminders after a prayer time too, which is helpful for work, commuting, or building a consistent salah routine.",
  },
  {
    question: "Do reminders update when prayer times change?",
    answer:
      "Yes. Dynamic salah reminders stay tied to the selected prayer time and move as daily prayer times shift.",
  },
  {
    question: "How accurate are the prayer times?",
    answer:
      "Prayer times depend on location, timezone, calculation method, and local guidance. Waqto Salat gives you practical settings and calibration so you can align the app with your community.",
  },
  {
    question: "Does Waqto Salat collect my data?",
    answer:
      "The published Google Play data safety details state that Waqto Salat does not collect data or share data with third parties.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="px-6 md:px-12 py-24 bg-off-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green mb-6">
            <HelpCircle className="h-4 w-4" />
            Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-islamic-green leading-tight mb-5">
            Answers before you download.
          </h2>
          <p className="text-muted-green leading-relaxed">
            Quick details about pricing, ads, privacy, prayer time accuracy, and the features included in Waqto Salat.
          </p>
        </div>

        <div className="divide-y divide-border-light rounded-lg border border-border-light bg-white shadow-sm">
          {faqs.map((faq, index) => (
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
