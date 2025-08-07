import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarqueeStripe } from "@/components/layout/MarqueeStripe";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { StepForwardSection } from "@/components/sections/StepForwardSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="bg-[#fff8ef] w-full">
      <Header />
        <HeroSection />
        <MarqueeStripe />
        <AboutSection />
        <ClientsSection />
        <StepForwardSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
