import { motion } from "motion/react";
import { AppMockup } from "./AppMockup";
import { Compass, Bell, LayoutDashboard, Heart } from "lucide-react";

export function FeatureSections() {
  const features = [
    {
      id: "prayer-times",
      title: "Accurate Prayer Times",
      description: "Uses recognized calculation methods with location, timezone, and calibration controls so you can align prayer times with your community when needed.",
      icon: <Bell className="w-5 h-5" />,
      imageSrc: "screenshot-3.png",
      alt: "Waqto Salat Android app showing prayer times and reminder settings",
      reverse: false
    },
    {
      id: "qibla",
      title: "Minimalist Qibla Compass",
      description: "Finding the direction of the Kaaba should be straightforward. Our compass is designed to be highly legible and completely free of clutter.",
      icon: <Compass className="w-5 h-5" />,
      imageSrc: "screenshot-4.png",
      alt: "Waqto Salat Android app showing minimalist Qibla compass direction",
      reverse: true
    },
    {
      id: "widgets",
      title: "Glanceable Widgets",
      description: "Keep tracking your next prayer right on your home screen or lock screen with beautifully crafted and distraction-free widgets.",
      icon: <LayoutDashboard className="w-5 h-5" />,
      imageSrc: "screenshot-6.png",
      alt: "Waqto Salat Android home screen widget showing upcoming prayer time",
      reverse: false
    },
    {
      id: "calm",
      title: "Calm By Design",
      description: "No loud animations. No stressful red text. Just deep greens, warm gold, and a layout that breathes. Designed to lower your heart rate, not raise it.",
      icon: <Heart className="w-5 h-5" />,
      imageSrc: "screenshot-1.png",
      alt: "Waqto Salat Android app calm prayer dashboard design",
      reverse: true
    }
  ];

  return (
    <section className="overflow-hidden bg-off-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32 lg:space-y-40">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${
              feature.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
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
                {feature.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-green leading-relaxed"
              >
                {feature.description}
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
                <AppMockup imageSrc={feature.imageSrc} alt={feature.alt} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
