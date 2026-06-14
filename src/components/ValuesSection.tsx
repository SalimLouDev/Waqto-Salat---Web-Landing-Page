import { MapPin, Bell, Compass, LayoutDashboard, Globe } from "lucide-react";
import { motion } from "motion/react";

export function ValuesSection() {
  const values = [
    {
      title: "100% Ad-Free & Free",
      description: "No annoyances, no premium subscriptions. Pure focus on your prayers.",
      icon: <span className="text-islamic-green font-bold text-xl">100</span>
    },
    {
      title: "Smart Alarms",
      description: "Alarms automatically adjust as prayer times naturally shift throughout the year.",
      icon: <Bell className="w-6 h-6 text-islamic-green" />
    },
    {
      title: "Qibla Direction",
      description: "Accurate, clean compass to help you establish the correct direction anywhere.",
      icon: <Compass className="w-6 h-6 text-islamic-green" />
    },
    {
      title: "Home Widgets",
      description: "Keep track of upcoming prayers beautifully directly on your home screen.",
      icon: <LayoutDashboard className="w-6 h-6 text-islamic-green" />
    },
    {
      title: "Multi-language",
      description: "Designed for a global ummah with support for multiple languages out of the box.",
      icon: <Globe className="w-6 h-6 text-islamic-green" />
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-islamic-green mb-4">
          Core Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Built to be the only prayer app you need. Respectful of your time and attention.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="p-8 rounded-3xl bg-off-white border border-border-light shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              {v.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-islamic-green">{v.title}</h3>
            <p className="text-muted-green leading-relaxed">
              {v.description}
            </p>
          </motion.div>
        ))}
        
        {/* Placeholder to make grid complete beautifully */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-3xl bg-islamic-green text-white flex flex-col justify-center border border-islamic-green/20"
        >
          <h3 className="text-xl font-display italic mb-3">Made with Ihsan</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Beautiful design meets exact calculation method formulas for worldwide accuracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
