export function Footer() {
  const contactEmail = "contact@waqtosalat.com";
  const linkClass = "rounded-sm transition-colors hover:text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30";

  return (
    <footer className="border-t border-border-light bg-footer-bg py-12 px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="max-w-md">
          <div className="text-xl font-display font-medium text-islamic-green mb-4">Waqto Salat</div>
          <p className="text-sm text-muted-green mb-6 leading-relaxed">
            Built to help Muslims organize their day around salah without distractions, ads, or locked features.
          </p>
          <div className="text-xs text-muted-green/70 leading-relaxed">
            Waqto Salat is a focused <strong className="font-medium text-muted-green">Muslim prayer times app</strong>, <strong className="font-medium text-muted-green">salah reminder app</strong>, and <strong className="font-medium text-muted-green">Qibla compass app</strong> for Android.
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 md:justify-self-end">
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Application</span>
            <a href="#features" className={linkClass}>Features</a>
            <a href="#about" className={linkClass}>About Us</a>
            <a href="#faq" className={linkClass}>FAQ</a>
            <a href="#download" className={`${linkClass} text-islamic-green font-medium`}>Download for Android</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Learn</span>
            <a href="/learn/" className={`${linkClass} font-medium text-islamic-green`}>Learn about Salah</a>
            <a href="/learn/five-daily-prayers/" className={linkClass}>Five Daily Prayers</a>
            <a href="/learn/sunnah-prayers/" className={linkClass}>Sunnah Prayers</a>
            <a href="/learn/witr-prayer/" className={linkClass}>Witr Prayer</a>
            <a href="/learn/nafl-prayers/" className={linkClass}>Nafl Prayers</a>
            <a href="/learn/duha-prayer/" className={linkClass}>Duha Prayer</a>
            <a href="/learn/tahajjud-prayer/" className={linkClass}>Tahajjud Prayer</a>
            <a href="/learn/istikhara-prayer/" className={linkClass}>Istikhara Prayer</a>
            <a href="/learn/eid-al-fitr-and-eid-al-adha-prayer/" className={linkClass}>Eid al-Fitr and Eid al-Adha Prayer</a>
            <a href="/learn/janazah-prayer/" className={linkClass}>Janazah Prayer</a>
            <a href="/learn/eclipse-prayer/" className={linkClass}>Eclipse Prayer</a>
            <a href="/learn/taraweeh-prayer/" className={linkClass}>Taraweeh Prayer</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Resources</span>
            <a href="/ad-free-prayer-times-app/" className={linkClass}>Ad-Free Prayer Times</a>
            <a href="/salah-reminder-app/" className={linkClass}>Salah Reminders</a>
            <a href="/qibla-compass-app/" className={linkClass}>Qibla Compass</a>
            <a href="/prayer-times-widget-android/" className={linkClass}>Android Widgets</a>
            <a href="/how-prayer-times-are-calculated/" className={linkClass}>Prayer Time Accuracy</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Legal</span>
            <a href="/privacy-policy/" className={linkClass}>Privacy Policy</a>
            <a href="/terms-of-service/" className={linkClass}>Terms of Service</a>
            <a href="/editorial-methodology/" className={linkClass}>Editorial Methodology</a>
            <a href={`mailto:${contactEmail}`} className={linkClass}>Contact / Feedback</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-muted-green/70 gap-3">
        <p>&copy; {new Date().getFullYear()} Waqto Salat. All rights reserved.</p>
        <p>Waqto Salat is completely free. Optional support helps keep it that way.</p>
      </div>
    </footer>
  );
}
