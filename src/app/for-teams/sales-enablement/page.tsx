import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function SalesEnablementPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </main>
  );
}
