import { AlarmClock, BellRing, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { GooglePlayBadge } from "./GooglePlayBadge";

const steps = [
  {
    title: "Choose a prayer",
    body: "Fajr, Dhuhr, Asr, Maghrib, or Isha.",
    icon: BellRing,
  },
  {
    title: "Set before or after",
    body: "Create a reminder around the salah time once.",
    icon: AlarmClock,
  },
  {
    title: "Let it move daily",
    body: "Waqto Salat updates the reminder as prayer times shift.",
    icon: RefreshCw,
  },
];

const useCases = [
  "Wake up 20 minutes before Fajr",
  "Pray 10 minutes after Dhuhr during work",
  "Get ready before Maghrib while commuting",
];

export function ReminderSystemSection() {
  return (
    <section id="reminders" className="bg-footer-bg px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-islamic-gold">
            Dynamic salah reminders
          </p>
          <h2 className="mb-6 font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            Prayer times change. Your reminders should too.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-green">
            A fixed alarm does not follow Fajr, Maghrib, or the changing salah schedule.
            Waqto Salat lets you create reminders around prayer times, so your routine
            stays connected to salah every day.
          </p>
          <GooglePlayBadge />
        </motion.div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-border-light bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

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
                        Step {index + 1}
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
            {useCases.map((useCase) => (
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
