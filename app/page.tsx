import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LearningCards } from "@/components/learning-cards";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <LearningCards />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
