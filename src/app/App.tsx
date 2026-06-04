import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AudienceSection } from "./components/AudienceSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PerksSection } from "./components/PerksSection";
import { TrustedSection } from "./components/TrustedSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";
import { CookiesPage } from "./components/CookiesPage";
import { useEffect, useState } from "react";

function getPage() {
  return window.location.pathname;
}

export default function App() {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const handlePopState = () => setPage(getPage());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Legal pages
  if (page === "/privacy") return <PrivacyPage />;
  if (page === "/terms") return <TermsPage />;
  if (page === "/cookies") return <CookiesPage />;

  // Landing page
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProblemsSection />
        <TrustedSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}