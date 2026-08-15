import { useEffect, useState } from "react";
import { assetPath } from "../lib/assets";
import type { LandingLocale } from "../content/landing";

const screenshots = [
  { png: "screenshot-1.png", webp: "screenshot-1.webp", alt: "Waqto Salat calm Android prayer dashboard" },
  { png: "screenshot-2.png", webp: "screenshot-2.webp", alt: "Waqto Salat Android prayer app screen" },
  { png: "screenshot-3.png", webp: "screenshot-3.webp", alt: "Waqto Salat Android app showing prayer times and reminders" },
  { png: "screenshot-4.png", webp: "screenshot-4.webp", alt: "Waqto Salat Android Qibla compass direction screen" },
  { png: "screenshot-5.png", webp: "screenshot-5.webp", alt: "Waqto Salat Android settings screen for prayer preferences" },
  { png: "screenshot-6.png", webp: "screenshot-6.webp", alt: "Waqto Salat Android home screen prayer times widget" },
];

export function MockupSlider({ locale = "en" }: { locale?: LandingLocale }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const localizedScreenshots = locale === "ar"
    ? [{ png: "screenshot-1-ar.png", webp: "screenshot-1-ar.webp", alt: "واجهة وقت الصلاة العربية على أندرويد" }]
    : screenshots;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || localizedScreenshots.length < 2) return;

    const advance = () => {
      if (document.visibilityState !== "visible") return;
      setCurrentIndex((prev) => (prev + 1) % localizedScreenshots.length);
    };
    let rotationTimer: number | undefined;
    const initialTimer = window.setTimeout(() => {
      advance();
      rotationTimer = window.setInterval(advance, 5000);
    }, 10000);

    return () => {
      window.clearTimeout(initialTimer);
      if (rotationTimer !== undefined) window.clearInterval(rotationTimer);
    };
  }, [localizedScreenshots.length]);

  const current = localizedScreenshots[currentIndex];

  return (
    <button
      type="button"
      aria-label={locale === "ar" ? "اعرض لقطة شاشة وقت الصلاة التالية" : "Show next Waqto Salat screenshot"}
      className="relative w-[min(20rem,82vw)] aspect-[941/1672] rounded-[2rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-black shrink-0 flex flex-col items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40"
      onClick={() => setCurrentIndex((prev) => (prev + 1) % localizedScreenshots.length)}
    >
      <div className="relative w-full h-full overflow-hidden z-10 bg-black">
          <picture key={currentIndex} className="absolute inset-0 block h-full w-full">
            <source
              srcSet={`${assetPath(current.webp.replace(".webp", "-320.webp"))} 320w, ${assetPath(current.webp.replace(".webp", "-560.webp"))} 560w, ${assetPath(current.webp)} 640w`}
              sizes="(min-width: 640px) 304px, calc(82vw - 16px)"
              type="image/webp"
            />
            <img
              src={assetPath(current.png)}
              alt={current.alt}
              width="640"
              height="1137"
              decoding="async"
              loading="eager"
              fetchPriority="auto"
              className="h-full w-full object-cover object-top"
            />
          </picture>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex gap-2 px-3 py-2 rounded-full bg-black/35 backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
        {localizedScreenshots.map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`h-1.5 w-5 origin-center rounded-full bg-white transition-[transform,opacity] duration-300 ${i === currentIndex ? "scale-x-100 opacity-100" : "scale-x-[0.3] opacity-40"}`}
          />
        ))}
      </div>
    </button>
  );
}
