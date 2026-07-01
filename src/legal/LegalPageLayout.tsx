import type { ReactNode } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import "../index.css";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageLayoutProps = {
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const contactEmail = "salimloudev@gmail.com";

export function LegalPageLayout({
  title,
  eyebrow,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-off-white font-sans text-islamic-green selection:bg-islamic-gold/30">
      <header className="fixed top-0 inset-x-0 z-[100] border-b border-border-light/80 bg-off-white/95 shadow-[0_10px_24px_rgba(10,61,45,0.035)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl w-full items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:px-12 min-w-0">
          <a
            href="/"
            className="inline-flex min-w-0 items-center gap-3 rounded-full text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            <img
              src="/logo.png"
              alt="Waqto Salat Logo"
              width="32"
              height="32"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="truncate whitespace-nowrap font-display text-xl font-medium tracking-tight sm:text-2xl">
              Waqto Salat
            </span>
          </a>
          <a
            href="/"
            aria-label="Back to Waqto Salat home"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-light px-3 py-2 text-xs font-bold uppercase tracking-widest text-islamic-green transition-colors hover:border-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:px-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-islamic-gold">
                {eyebrow}
              </p>
              <h1 className="mb-6 font-display text-4xl font-medium leading-tight md:text-6xl">
                {title}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-muted-green">{description}</p>
              <p className="rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-muted-green shadow-sm">
                Last updated: <strong className="font-semibold text-islamic-green">{lastUpdated}</strong>
              </p>
            </aside>

            <article className="min-w-0 rounded-lg border border-border-light bg-white p-6 shadow-sm md:p-10">
              <div className="space-y-10">
                {sections.map((section) => (
                  <section key={section.title} className="scroll-mt-8">
                    <h2 className="mb-4 font-display text-2xl font-medium text-islamic-green">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-base leading-8 text-muted-green">
                      {section.body}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-light bg-footer-bg px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-muted-green md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Waqto Salat. All rights reserved.</p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 rounded-sm font-semibold text-islamic-green hover:text-islamic-green-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            <Mail className="h-4 w-4" />
            Contact / Feedback
          </a>
        </div>
      </footer>
    </div>
  );
}
