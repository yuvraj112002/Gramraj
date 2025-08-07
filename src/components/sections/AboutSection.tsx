import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ruralLandscape from "@/assets/rural-landscape.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            WHO <span className="text-brand-orange">WE</span> ARE
          </h2>
          <p className="text-lg text-muted-foreground">Architects of Dignity</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-up" delay={200}>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[40rem] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="banner.jpg"
                  alt="Rural landscape with farmers in field"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="space-y-6">
              <p className="body-base text-muted-foreground">
                Gramraj symbolizes the sovereignty—bringing the digital foundations for a civilization empowered in agriculture and rural development.
              </p>
              <p className="body-base text-muted-foreground">
                We build architectures, not apps—creating a second layer that provides for how sovereignty is felt and maintained in its sovereignty, inclusivity, and quality assurance.
              </p>
              <p className="body-base text-muted-foreground">
                Systems design that complement the real-categories, transient, and persistent of rural life and their global economy.
              </p>
              <p className="body-base text-muted-foreground">
                By investing in, functioning on, optimizations, and distribution, we make agriculture fit to meet the people's needs.
              </p>
              <p className="body-base text-muted-foreground">
                We innovate, deliver, integrate, sustainability, economy, and the nature-based economy.
              </p>

              <div className="bottom-4 left-4  backdrop-blur-sm rounded-lg px-4 py-2  flex items-center gap-2 shadow-sm flex-col">
                <div>
                  <img src="singleStripe.png" alt="Gramraj Logo" className="w-[5rem] h-[5rem]" />
                </div>
                <p className="font-semibold text-center">
                  <span className="text-green-600 text-[3rem] font-bold">This is </span>
                  <span className="text-orange-500 text-[3rem] font-bold">Gramraj</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};