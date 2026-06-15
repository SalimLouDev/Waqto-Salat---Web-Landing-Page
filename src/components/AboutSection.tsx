import type { ReactNode } from "react";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="bg-islamic-green text-white py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0_45%,rgba(255,255,255,.35)_45%_46%,transparent_46%_100%)] bg-[length:42px_42px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-islamic-gold uppercase tracking-widest font-semibold mb-5">
            About Waqto Salat
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">
            A clear focus on Salah.
          </h2>
          <p className="text-xl md:text-2xl text-white/88 leading-relaxed font-display italic">
            Built to help Muslims organize their day around salah without distractions, ads, or locked features.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          <AboutCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Privacy first"
            body="Published Play Store data safety details state that Waqto Salat does not collect data or share data with third parties."
          />
          <AboutCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Prayer essentials"
            body="Prayer times, dynamic reminders, Qibla direction, widgets, calibration, and multilingual support."
          />
          <AboutCard
            icon={<HeartHandshake className="h-5 w-5" />}
            title="Free forever"
            body="No ads, no subscriptions, and no locked prayer essentials."
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-lg border border-white/12 bg-white/7 p-5 backdrop-blur-sm"
    >
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-islamic-gold/15 text-islamic-gold">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-white/72">{body}</p>
    </motion.div>
  );
}
