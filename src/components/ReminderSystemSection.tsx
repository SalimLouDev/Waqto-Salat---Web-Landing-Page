import { AlarmClock, BellRing, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { GooglePlayBadge } from "./GooglePlayBadge";
import { landingCopy, type LandingLocale } from "../content/landing";

const stepIcons = [BellRing, AlarmClock, RefreshCw];

export function ReminderSystemSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].reminders;
  return (
    <section id="reminders" className="bg-footer-bg px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-islamic-gold">
            {copy.eyebrow}
          </p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            {copy.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-green">
            {copy.body}
          </p>
          <GooglePlayBadge locale={locale} />
        </motion.div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-border-light bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {copy.steps.map((step, index) => {
                const Icon = stepIcons[index];

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="relative min-w-0 rounded-lg bg-off-white p-5"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-islamic-green text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-islamic-gold">
                        {copy.stepLabel} {index + 1}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-islamic-green">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-green">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {copy.useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-lg border border-islamic-green/10 bg-islamic-green px-5 py-4 text-sm font-semibold leading-relaxed text-white shadow-sm"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
