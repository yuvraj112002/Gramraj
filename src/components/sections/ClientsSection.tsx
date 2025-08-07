import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const ClientsSection = () => {
  const clients = [
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      width: "120px"
    },
    { 
      name: "Microsoft", 
      logo: "gramLogo.avif",
      width: "140px"
    },
    { 
      name: "Amazon", 
      logo: "worldBankGroup.svg",
      width: "140px"
    },
    // { 
    //   name: "Meta", 
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    //   width: "120px"
    // },
    // { 
    //   name: "Apple", 
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    //   width: "40px"
    // }
  ];

  return (
    <section id="clients" className="section-tight bg-neutral-50">
      <div className="container">
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="heading-md text-foreground mb-4">OUR CLIENT</h2>
          <p className="body-base text-muted-foreground">
            Accelerating that vision to be the tools to be on. We get to let see our products.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client, index) => (
            <ScrollReveal 
              key={client.name}
              animation="scale-in" 
              delay={index * 150}
            >
              <div className="group opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  style={{ width: client.width }}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-lg"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};