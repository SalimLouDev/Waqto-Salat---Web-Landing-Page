import { Mail, Play, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const playStoreUrl =
  import.meta.env.VITE_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.salimloudev.waqtosalat";
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "salimloudev@gmail.com";

export function SupportSections() {
  return (
    <>
      <section id="download" className="px-6 md:px-12 py-24 bg-off-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border-light bg-white p-8 md:p-12 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green mb-8">
              <Smartphone className="h-4 w-4" />
              Android prayer companion
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-islamic-green leading-tight mb-6">
              Prayer times that stay close to your day.
            </h2>
            <p className="text-lg text-muted-green leading-relaxed max-w-2xl mb-8">
              Waqto Salat brings accurate salah times, smart reminders, Qibla direction, and home widgets into a focused Android app with no ads and no subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={playStoreUrl}
                className="rounded-full bg-[#0A3D2D] text-white px-7 py-4 font-bold uppercase tracking-widest text-sm inline-flex items-center justify-center gap-3 hover:bg-islamic-green-hover transition-colors shadow-lg"
              >
                <Play className="w-5 h-5 fill-white" />
                Get the Android app
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="rounded-full border border-border-light text-islamic-green px-7 py-4 font-bold uppercase tracking-widest text-sm inline-flex items-center justify-center gap-3 hover:border-islamic-green transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact support
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-lg bg-islamic-green text-white p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <Sparkles className="h-8 w-8 text-islamic-gold mb-8" />
              <h3 className="text-2xl font-display font-medium mb-4">Built around the five daily prayers</h3>
              <p className="text-white/75 leading-relaxed">
                The interface follows the rhythm of Fajr, Dhuhr, Asr, Maghrib, and Isha so the next prayer is always easy to see.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-10 text-center text-xs uppercase tracking-widest text-white/70">
              {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => (
                <span key={prayer} className="rounded-lg border border-white/15 px-2 py-3">
                  {prayer}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="privacy" className="px-6 md:px-12 py-20 bg-footer-bg border-y border-border-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-islamic-green mb-6">
              <ShieldCheck className="h-4 w-4" />
              Privacy first
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-islamic-green leading-tight">
              Respect for your attention starts with respect for your data.
            </h2>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <PolicyCard
              id="privacy-policy"
              title="Privacy Policy"
              body="Waqto Salat is designed for prayer utility, not tracking. The published Google Play data safety details state that the app does not collect data or share data with third parties."
            />
            <PolicyCard
              id="terms"
              title="Terms of Service"
              body="Prayer time calculations can vary by method, location, device settings, and local authority guidance. Use the app as a practical companion and adjust settings for your community."
            />
            <PolicyCard
              title="Contact / Feedback"
              body={`For support, correction requests, or feedback about calculation methods, contact ${contactEmail}.`}
            />
            <PolicyCard
              title="Free Forever"
              body="The landing page and app messaging are aligned around a simple promise: no ads, no subscriptions, and no locked prayer essentials."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function PolicyCard({ id, title, body }: { id?: string; title: string; body: string }) {
  return (
    <div id={id} className="rounded-lg border border-border-light bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-islamic-green mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-green">{body}</p>
    </div>
  );
}
