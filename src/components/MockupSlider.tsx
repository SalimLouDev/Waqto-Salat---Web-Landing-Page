import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const screenshots = [
  "/screenshot-1.png",
  "/screenshot-2.png",
  "/screenshot-3.png",
  "/screenshot-4.png",
  "/screenshot-5.png",
  "/screenshot-6.png"
];

export function MockupSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-80 h-[680px] rounded-[3rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-black shrink-0 flex flex-col items-center justify-center cursor-pointer group"
      onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
    >
      <div className="relative w-full h-full overflow-hidden z-10 bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2 px-3 py-2 rounded-full bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {screenshots.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`} 
          />
        ))}
      </div>
    </motion.div>
  );
}
