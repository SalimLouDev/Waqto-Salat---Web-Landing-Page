import { motion } from "motion/react";
import { Moon } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 bg-off-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 text-islamic-green">
          <img src="/logo.png" alt="Waqto Salat Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-display font-medium text-2xl tracking-tight">Waqto Salat</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-muted-green opacity-80">
          <a href="#features" className="hover:text-islamic-green transition-colors">Features</a>
          <a href="#about" className="hover:text-islamic-green transition-colors">About</a>
        </div>

        <a 
          href="#download"
          className="bg-islamic-gold/10 text-islamic-gold hover:bg-islamic-gold hover:text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-sm"
        >
          Download
        </a>
      </div>
    </motion.nav>
  );
}
