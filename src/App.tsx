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
import type { LandingLocale } from "./content/landing";

export default function App() {
  const locale: LandingLocale = document.documentElement.lang === "ar" ? "ar" : "en";

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden font-sans selection:bg-islamic-gold/30 selection:text-islamic-green bg-off-white">
        <Navbar locale={locale} />
        <main id="main" tabIndex={-1}>
          <Hero locale={locale} />
          <ReminderSystemSection locale={locale} />
          <div id="features">
            <ValuesSection locale={locale} />
            <FeatureSections locale={locale} />
          </div>

          <AboutSection locale={locale} />
          <SupportSections locale={locale} />
          <FAQSection locale={locale} />
          <LearnSection locale={locale} />
          <ResourceLinksSection locale={locale} />
        </main>
        <Footer locale={locale} />
    </div>
  );
}
