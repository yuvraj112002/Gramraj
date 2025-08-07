import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const HeroSection = () => {
  return (
    <section id="hero" className="section bg-gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-6">
              <h1 className="heading-xl text-foreground">
                Architects of Dignity for{" "}
                <span className="text-brand-orange">Rural Bharat</span>
              </h1>
              <p className="body-lg text-muted-foreground max-w-xl">
                Laying digital foundations for a sovereign, decentralised, and enduring civilisation.
              </p>
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3 text-lg"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                STUDY GRAMRAJ
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={200}>
            <div className="relative max-w-lg mx-auto">
              <img src="sideHero.png" alt="hero section" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};