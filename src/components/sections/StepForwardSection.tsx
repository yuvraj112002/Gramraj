import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const StepForwardSection = () => {
  return (
    <section className="section bg-brand-orange">
      <div className="container">
        <ScrollReveal animation="fade-up" className="text-center">
          <h2 className="heading-lg text-white mb-8">STEP FORWARD</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white font-medium">
              We are not merely building tech.
            </p>
            <p className="text-xl md:text-2xl text-white font-medium">
              We are composing a framework for rural autonomy—
            </p>
            <p className="text-xl md:text-2xl text-white font-medium">
              designed to dissolve into daily life and
            </p>
            <p className="text-xl md:text-2xl text-white font-medium">
              endure for generations.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};