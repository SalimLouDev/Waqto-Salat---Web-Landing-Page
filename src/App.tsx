import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValuesSection } from "./components/ValuesSection";
import { FeatureSections } from "./components/FeatureSections";
import { AboutSection } from "./components/AboutSection";
import { SupportSections } from "./components/SupportSections";
import { FAQSection } from "./components/FAQSection";
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

        <AboutSection />
        <SupportSections />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
