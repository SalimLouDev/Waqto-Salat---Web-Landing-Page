import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import { assetPath } from "../lib/assets";

export function Navbar() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  const learnLinks = [
    { href: "/learn/", label: "All Salah Guides" },
    { href: "/learn/five-daily-prayers/", label: "Five Daily Prayers" },
    { href: "/learn/sunnah-prayers/", label: "Sunnah Prayers" },
    { href: "/learn/witr-prayer/", label: "Witr Prayer" },
    { href: "/learn/nafl-prayers/", label: "Nafl Prayers" },
    { href: "/learn/duha-prayer/", label: "Duha Prayer" },
    { href: "/learn/tahajjud-prayer/", label: "Tahajjud Prayer" },
    { href: "/learn/istikhara-prayer/", label: "Istikhara Prayer" },
    { href: "/learn/eid-al-fitr-and-eid-al-adha-prayer/", label: "Eid Prayer" },
    { href: "/learn/janazah-prayer/", label: "Janazah Prayer" },
    { href: "/learn/eclipse-prayer/", label: "Eclipse Prayer" },
    { href: "/learn/taraweeh-prayer/", label: "Taraweeh Prayer" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      aria-label="Primary navigation"
      className="fixed top-0 inset-x-0 z-[100] bg-off-white/95 backdrop-blur-xl border-b border-border-light/80 shadow-[0_10px_24px_rgba(10,61,45,0.035)]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-3 sm:gap-4">
        <a href="/" className="min-w-0 flex items-center gap-3 text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full">
          <img src={assetPath("logo.png")} alt="Waqto Salat Logo" width="32" height="32" className="w-8 h-8 rounded-full object-cover" />
          <span className="truncate whitespace-nowrap font-display text-xl font-medium sm:text-2xl">Waqto Salat</span>
        </a>
        
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-muted-green">
          <div className="group relative">
            <a
              href="/learn/"
              className="relative inline-flex items-center gap-1.5 rounded-full py-2 transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:w-0 after:bg-islamic-gold after:transition-[width] after:duration-200 hover:text-islamic-green hover:after:w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 group-hover:text-islamic-green"
            >
              Learn
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </a>
            <div className="invisible absolute left-1/2 top-full z-[120] w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility,transform] duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-lg border border-border-light bg-white p-3 shadow-[0_18px_44px_rgba(10,61,45,0.14)]">
                <div className="grid grid-cols-2 gap-1">
                  {learnLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-green transition-colors hover:bg-footer-bg hover:text-islamic-green focus:outline-none focus-visible:bg-footer-bg focus-visible:text-islamic-green focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 hover:text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 rounded-full transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:w-0 after:bg-islamic-gold after:transition-[width] after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#download"
          className="shrink-0 bg-islamic-green text-white hover:bg-islamic-green-hover px-3 sm:px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-[background-color,box-shadow] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
        >
          <Download className="hidden sm:block h-4 w-4" />
          <span className="sm:hidden">Get App</span>
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </motion.nav>
  );
}
