import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      number: "6/1",
      title: "Connectivity Intelligence for Rural Communities",
      description: "For transition, geographical science gives weather, hydrogeographic environment and allows knowledge to be found on weather patterns and science related to lived and done with and people."
    },
    {
      number: "6/2", 
      title: "Digital Infrastructure for Trust & Transparency",
      description: "We process infrastructure systems that integrate blockchain, cloud storage, and machine—changing that agricultural data are secure and efficient."
    },
    {
      number: "6/3",
      title: "Data Sovereignty Architecture", 
      description: "We help rural learners receive control over their data disconnecting provision and communication while also empowering them will solutions and present based strategies."
    },
    {
      number: "6/4",
      title: "Capacity-Led Commerce",
      description: "Driven trade networks—through broadband, social machines, and enable people to make and value their products and connect directly to their platforms."
    },
    {
      number: "6/5",
      title: "Inclusive AI & Behavioural Systems",
      description: "We build systems that focus in rural language networks to cultural landscape, research an agricultural learning, intelligent systems to deliver literacy and presence."
    },
    {
      number: "6/6", 
      title: "Distributed Community Governance",
      description: "We enable one communities to self-organise through cooperative civic networks, where autonomy, dignity, and trust can control and the largest economy."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            WHAT WE BUILD FOR <span className="text-brand-orange">BHARAT</span>
          </h2>
          <p className="body-base text-muted-foreground">
            Foundations What We Build for Bharat
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index}
              animation="scale-in" 
              delay={index * 100}
            >
              <Card className="group h-full border-0 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-white hover:to-brand-green/5 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-4">
                    <div className="text-brand-orange font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {service.number}
                    </div>
                    <h3 className="heading-sm text-foreground group-hover:text-brand-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="body-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};