import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal animation="fade-up">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <img src="logo.png" alt="Gramraj" className="w-14 h-14" />
                <span className="text-2xl font-bold text-foreground">Gramraj</span>
              </div>
              
              <p className="text-lg text-muted-foreground">
                EMPOWERING THE GOVERNANCE OF RURAL BHARAT
              </p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First Name
                  </Label>
                  <Input 
                    id="firstName"
                    className="mt-2"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last Name
                  </Label>
                  <Input 
                    id="lastName"
                    className="mt-2"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-2"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us about your project"
                  />
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={300}>
            <div className="relative bg-brand-orange rounded-3xl p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="heading-md mb-8">Get in touch.</h2>
                
                {/* Decorative arrow illustration */}
                <div className="absolute bottom-8 right-8 opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-white">
                    <path 
                      d="M20 60L100 60M100 60L80 40M100 60L80 80" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute bottom-0 left-0 right-0 opacity-10">
                <div className="flex justify-center">
                  <GeometricPattern />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};