import { Button } from "@/components/ui/button";
import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Gramraj" className="w-12 h-12" />
            <span className="text-2xl font-bold text-foreground">Gramraj</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#hero" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#clients" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Courses
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Foundations
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join us
          </Button>
        </div>
      </div>
    </header>
  );
};