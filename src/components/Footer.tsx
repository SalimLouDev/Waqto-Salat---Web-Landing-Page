export function Footer() {
  return (
    <footer className="border-t border-border-light bg-footer-bg py-12 px-6 md:px-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">
        <div>
          <div className="text-xl font-display font-medium text-islamic-green mb-4">Waqto Salat</div>
          <p className="text-sm text-muted-green max-w-sm mb-6 leading-relaxed">
            Built to help Muslims organize their day around salah without distractions, ads, or locked features.
          </p>
          <div className="text-xs text-muted-green/70 max-w-sm leading-relaxed">
            Waqto Salat is a premium <strong className="font-medium text-muted-green">Muslim prayer times app</strong> created for focus. It works as an <strong className="font-medium text-muted-green">ad-free prayer app</strong> and a highly accurate <strong className="font-medium text-muted-green">salah reminder app</strong>. Features include a minimalist <strong className="font-medium text-muted-green">Qibla compass app</strong> and an intelligent <strong className="font-medium text-muted-green">Islamic alarm app</strong> that respects your time.
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-medium text-islamic-green mb-1">Application</span>
            <a href="#features" className="hover:text-islamic-green transition-colors">Features</a>
            <a href="#about" className="hover:text-islamic-green transition-colors">About Us</a>
            <a href="#download" className="hover:text-islamic-green transition-colors text-islamic-green font-medium">Download for Android</a>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-green">
            <span className="font-medium text-islamic-green mb-1">Legal</span>
            <a href="#privacy" className="hover:text-islamic-green transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-islamic-green transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-islamic-green transition-colors">Contact / Feedback</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center text-sm text-muted-green/70 gap-4">
        <p>© {new Date().getFullYear()} Waqto Salat. All rights reserved.</p>
        <p>Waqto Salat is completely free. Optional support helps keep it that way.</p>
      </div>
    </footer>
  );
}
