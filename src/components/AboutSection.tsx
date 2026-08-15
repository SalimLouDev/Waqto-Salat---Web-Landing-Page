import type { ReactNode } from "react";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { landingCopy, type LandingLocale } from "../content/landing";

export function AboutSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].about;
  return (
    <section id="about" className="bg-islamic-green text-white py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0_45%,rgba(255,255,255,.35)_45%_46%,transparent_46%_100%)] bg-[length:42px_42px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div>
          <p className="text-sm text-islamic-gold uppercase tracking-widest font-semibold mb-5">
            {copy.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">
            {copy.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/88 leading-relaxed font-display italic">
            {copy.body}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <AboutCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title={copy.cards[0].title}
            body={copy.cards[0].body}
          />
          <AboutCard
            icon={<Sparkles className="h-5 w-5" />}
            title={copy.cards[1].title}
            body={copy.cards[1].body}
          />
          <AboutCard
            icon={<HeartHandshake className="h-5 w-5" />}
            title={copy.cards[2].title}
            body={copy.cards[2].body}
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div
      className="rounded-lg border border-white/12 bg-white/7 p-5 backdrop-blur-sm"
    >
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-islamic-gold/15 text-islamic-gold">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-white/72">{body}</p>
    </div>
  );
}
