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
      <header className="border-b border-border-light bg-off-white/95">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5 md:px-10 min-w-0">
          <a
            href="/"
            className="inline-flex min-w-0 items-center gap-3 rounded-full text-islamic-green focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-islamic-gold/15 font-display text-lg text-islamic-gold">
              W
            </span>
            <span className="truncate font-display text-xl font-medium">Waqto Salat</span>
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

      <main>
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
            className="inline-flex items-center gap-2 font-semibold text-islamic-green hover:text-islamic-green-hover"
          >
            <Mail className="h-4 w-4" />
            Contact / Feedback
          </a>
        </div>
      </footer>
    </div>
  );
}
