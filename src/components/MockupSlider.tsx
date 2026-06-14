import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const screenshots = [
  { png: "/screenshot-1.png", webp: "/screenshot-1.webp", alt: "Waqto Salat prayer dashboard" },
  { png: "/screenshot-2.png", webp: "/screenshot-2.webp", alt: "Waqto Salat prayer times screen" },
  { png: "/screenshot-3.png", webp: "/screenshot-3.webp", alt: "Waqto Salat Qibla compass screen" },
  { png: "/screenshot-4.png", webp: "/screenshot-4.webp", alt: "Waqto Salat home widget screen" },
  { png: "/screenshot-5.png", webp: "/screenshot-5.webp", alt: "Waqto Salat calm settings screen" },
  { png: "/screenshot-6.png", webp: "/screenshot-6.webp", alt: "Waqto Salat additional app screen" },
];

export function MockupSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const current = screenshots[currentIndex];

  return (
    <motion.button
      type="button"
      aria-label="Show next Waqto Salat screenshot"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[min(20rem,82vw)] aspect-[941/1672] rounded-[2rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-black shrink-0 flex flex-col items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40"
      onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
    >
      <div className="relative w-full h-full overflow-hidden z-10 bg-black">
        <AnimatePresence initial={false} mode="wait">
          <motion.picture
            key={currentIndex}
            className="absolute inset-0 block h-full w-full"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <source srcSet={current.webp} type="image/webp" />
            <img
              src={current.png}
              alt={current.alt}
              width="640"
              height="1137"
              decoding="async"
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
              className="h-full w-full object-cover object-top"
            />
          </motion.picture>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex gap-2 px-3 py-2 rounded-full bg-black/35 backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
        {screenshots.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </motion.button>
  );
}
