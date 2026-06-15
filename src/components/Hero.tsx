import { motion } from "motion/react";
import { Bell, Compass } from "lucide-react";
import { GooglePlayBadge } from "./GooglePlayBadge";
import { MockupSlider } from "./MockupSlider";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 min-w-0 w-full text-center lg:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[22rem] sm:max-w-2xl mx-auto lg:mx-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-islamic-green leading-tight mb-6 text-balance"
          >
            A calm, <br className="hidden md:block" />
            <span className="italic text-islamic-gold">ad-free</span> prayer companion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-green max-w-[21rem] sm:max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Prayer times, reminders, and Qibla direction. Calmly, accurately, and without ads.
            Built around your day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="grid w-full grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 mb-10"
          >
            <div className="min-w-0 rounded-lg border border-border-light bg-white/70 px-4 py-4 text-left shadow-sm">
              <Bell className="w-5 h-5 text-islamic-gold mb-3" />
              <div className="text-sm font-semibold text-islamic-green">Smart salah alarms</div>
              <div className="text-xs text-muted-green mt-1">Adjusts as prayer times shift</div>
            </div>
            <div className="min-w-0 rounded-lg border border-border-light bg-white/70 px-4 py-4 text-left shadow-sm">
              <Compass className="w-5 h-5 text-islamic-gold mb-3" />
              <div className="text-sm font-semibold text-islamic-green">Clear Qibla direction</div>
              <div className="text-xs text-muted-green mt-1">Minimal compass, no clutter</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <GooglePlayBadge />
            <p className="text-xs uppercase tracking-widest text-muted-green font-semibold hidden sm:block">100% Free &middot; No Subscription &middot; No Ads</p>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full min-w-0 max-w-md overflow-hidden lg:max-w-none flex justify-center lg:justify-end">
          <div className="relative w-full min-w-0 flex justify-center items-center">
            <div className="relative z-10">
              <MockupSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
