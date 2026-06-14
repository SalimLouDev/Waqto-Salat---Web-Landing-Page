import { motion } from "motion/react";
import { MockupSlider } from "./MockupSlider";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-islamic-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-islamic-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-islamic-green leading-tight mb-6"
          >
            A calm, <br className="hidden md:block" />
            <span className="italic text-islamic-gold">ad-free</span> prayer companion.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-green max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Prayer times, reminders, and Qibla direction. Calmly, accurately, and without ads. 
            Built around your day.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a href="#download" className="group rounded-full bg-islamic-green text-white px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-islamic-green-hover transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center">
              <Play className="w-5 h-5 fill-white" />
              Get it on Google Play
            </a>
            <p className="text-xs uppercase tracking-widest text-muted-green font-semibold hidden sm:block">100% Free • No Subscription • No Ads</p>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
          <div className="relative w-full h-[680px] flex justify-center items-center">
            <div className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-12 z-0 w-80 h-96 bg-islamic-gold/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
               <MockupSlider />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
