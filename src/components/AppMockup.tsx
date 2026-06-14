import { motion } from "motion/react";

export function AppMockup({ imageSrc, alt }: { imageSrc?: string; alt?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-80 h-[680px] rounded-[3rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-islamic-green shrink-0 flex items-center justify-center"
    >
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={alt || "App Screenshot"} 
          className="w-full h-full object-cover object-top"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div className="text-white/50 font-medium p-6 text-center">
          Screenshot Placeholder
        </div>
      )}
    </motion.div>
  );
}
