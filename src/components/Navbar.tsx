import { motion } from "motion/react";
import { Download } from "lucide-react";
import { assetPath } from "../lib/assets";

export function Navbar() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Support" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      aria-label="Primary navigation"
      className="fixed top-0 inset-x-0 z-50 bg-off-white/95 backdrop-blur-xl border-b border-border-light/80 shadow-[0_10px_24px_rgba(10,61,45,0.035)]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-3 sm:gap-4">
        <a href="#" className="min-w-0 flex items-center gap-3 text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full">
          <img src={assetPath("logo.png")} alt="Waqto Salat Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="truncate whitespace-nowrap font-display text-xl font-medium tracking-tight sm:text-2xl">Waqto Salat</span>
        </a>
        
        <div className="hidden md:flex items-center gap-9 text-sm font-semibold text-muted-green">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 hover:text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:w-0 after:bg-islamic-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#download"
          className="shrink-0 bg-islamic-green text-white hover:bg-islamic-green-hover px-3 sm:px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
        >
          <Download className="hidden sm:block h-4 w-4" />
          <span className="sm:hidden">Get App</span>
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </motion.nav>
  );
}
