import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValuesSection } from "./components/ValuesSection";
import { ReminderSystemSection } from "./components/ReminderSystemSection";
import { FeatureSections } from "./components/FeatureSections";
import { AboutSection } from "./components/AboutSection";
import { SupportSections } from "./components/SupportSections";
import { FAQSection } from "./components/FAQSection";
import { LearnSection } from "./components/LearnSection";
import { ResourceLinksSection } from "./components/ResourceLinksSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans selection:bg-islamic-gold/30 selection:text-islamic-green bg-off-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-islamic-green focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40"
      >
        Skip to Content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ReminderSystemSection />
        <div id="features">
          <ValuesSection />
          <FeatureSections />
        </div>

        <AboutSection />
        <SupportSections />
        <FAQSection />
        <LearnSection />
        <ResourceLinksSection />
      </main>
      <Footer />
    </div>
  );
}
