import { Bell, Compass, LayoutDashboard, Globe } from "lucide-react";
import { motion } from "motion/react";
import { landingCopy, type LandingLocale } from "../content/landing";

const valueIcons = [
  <span className="text-islamic-green font-bold text-xl">100</span>,
  <Bell className="w-6 h-6 text-islamic-green" />,
  <Compass className="w-6 h-6 text-islamic-green" />,
  <LayoutDashboard className="w-6 h-6 text-islamic-green" />,
  <Globe className="w-6 h-6 text-islamic-green" />,
];

export function ValuesSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].values;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-islamic-green mb-4">
          {copy.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {copy.body}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {copy.items.map((value, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={value.title}
            className="p-8 rounded-lg bg-off-white border border-border-light shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-6">
              {valueIcons[index]}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-islamic-green">{value.title}</h3>
            <p className="text-muted-green leading-relaxed">
              {value.body}
            </p>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-lg bg-islamic-green text-white flex flex-col justify-center border border-islamic-green/20"
        >
          <h3 className="text-xl font-display italic mb-3">{copy.closingTitle}</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {copy.closingBody}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
