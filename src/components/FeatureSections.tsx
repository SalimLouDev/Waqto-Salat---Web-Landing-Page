import { motion } from "motion/react";
import { AppMockup } from "./AppMockup";
import { Compass, Bell, LayoutDashboard, Heart } from "lucide-react";
import { landingCopy, type LandingLocale } from "../content/landing";

const featureSettings = [
  { id: "prayer-times", icon: <Bell className="w-5 h-5" />, imageSrc: "screenshot-3.png", reverse: false },
  { id: "qibla", icon: <Compass className="w-5 h-5" />, imageSrc: "screenshot-4.png", reverse: true },
  { id: "widgets", icon: <LayoutDashboard className="w-5 h-5" />, imageSrc: "screenshot-6.png", reverse: false },
  { id: "calm", icon: <Heart className="w-5 h-5" />, imageSrc: "screenshot-1.png", reverse: true },
];

export function FeatureSections({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].features;

  return (
    <section className="overflow-hidden bg-off-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32 lg:space-y-40">
        {featureSettings.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${
              feature.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className={`flex-1 text-center ${locale === "ar" ? "lg:text-right" : "lg:text-left"}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-flex items-center justify-center p-3 rounded-lg bg-islamic-green/10 text-islamic-green mb-6"
              >
                {feature.icon}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-medium text-islamic-green mb-6 leading-tight"
              >
                {copy[index].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-green leading-relaxed"
              >
                {copy[index].body}
              </motion.p>
            </div>

            {/* Visual / Mockup */}
            <div className="flex-1 flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <AppMockup imageSrc={locale === "ar" && index === 3 ? "screenshot-1-ar.png" : feature.imageSrc} alt={copy[index].alt} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
