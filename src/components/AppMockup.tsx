import { motion } from "motion/react";
import { assetPath } from "../lib/assets";

function webpFromPng(src: string) {
  return src.endsWith(".png") ? src.replace(".png", ".webp") : src;
}

export function AppMockup({ imageSrc, alt }: { imageSrc?: string; alt?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[min(20rem,82vw)] aspect-[941/1672] rounded-[2rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-islamic-green shrink-0 flex items-center justify-center"
    >
      {imageSrc ? (
        <picture className="block h-full w-full">
          <source srcSet={assetPath(webpFromPng(imageSrc))} type="image/webp" />
          <img
            src={assetPath(imageSrc)}
            alt={alt || "Waqto Salat app screenshot"}
            width="640"
            height="1137"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </picture>
      ) : (
        <div className="text-white/50 font-medium p-6 text-center">
          Screenshot Placeholder
        </div>
      )}
    </motion.div>
  );
}
