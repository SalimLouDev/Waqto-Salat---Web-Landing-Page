export function Footer() {
  return (
    <footer id="contact" className="border-t border-border-light bg-footer-bg py-12 px-6 md:px-12 text-left">
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

        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:justify-self-end">
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Application</span>
            <a href="#features" className="hover:text-islamic-green transition-colors">Features</a>
            <a href="#about" className="hover:text-islamic-green transition-colors">About Us</a>
            <a href="#download" className="hover:text-islamic-green transition-colors text-islamic-green font-medium">Download for Android</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-semibold text-islamic-green mb-1">Legal</span>
            <a href="#privacy" className="hover:text-islamic-green transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-islamic-green transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-islamic-green transition-colors">Contact / Feedback</a>
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
