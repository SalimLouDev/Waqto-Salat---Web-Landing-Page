import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValuesSection } from "./components/ValuesSection";
import { FeatureSections } from "./components/FeatureSections";
import { SupportSections } from "./components/SupportSections";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans selection:bg-islamic-gold/30 selection:text-islamic-green bg-off-white">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <ValuesSection />
          <FeatureSections />
        </div>

        <div id="about" className="bg-islamic-green text-white py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(135deg,transparent_0_45%,rgba(255,255,255,.35)_45%_46%,transparent_46%_100%)] bg-[length:42px_42px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">A clear focus on Salah</h2>
            <p className="text-2xl text-white/90 leading-relaxed mb-12 font-display italic">
              Built to help Muslims organize their day around salah without distractions, ads, or locked features.
            </p>
            <p className="text-base text-islamic-gold uppercase tracking-widest font-medium">
              Available worldwide. Free forever.
            </p>
          </div>
        </div>

        <SupportSections />
      </main>
      <Footer />
    </div>
  );
}
