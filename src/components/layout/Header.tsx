import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="bg-[#fff8ef] shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Gramraj" className="w-12 h-12" />
            <span className="text-2xl font-bold text-foreground">Gramraj</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={e => {
                e.preventDefault();
                handleNavClick("hero");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={e => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About
            </a>
            <a
              href="#clients"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={e => {
                e.preventDefault();
                handleNavClick("clients");
              }}
            >
              Courses
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={e => {
                e.preventDefault();
                handleNavClick("services");
              }}
            >
              Foundations
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6"
              onClick={() => handleNavClick("contact")}
            >
              Join us
            </Button>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-7 h-7 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#fff8ef] shadow-lg rounded-lg mt-2 px-6 py-4 animate-fade-in-down">
            <nav className="flex flex-col gap-4">
              <a
                href="#hero"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                About
              </a>
              <a
                href="#clients"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick("clients");
                }}
              >
                Courses
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick("services");
                }}
              >
                Foundations
              </a>
              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6 mt-2"
                onClick={() => handleNavClick("contact")}
              >
                Join us
              </Button>
            </nav>
          </div>
        )}
      </div>
      {/* Optional: Add a simple fade-in-down animation */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.2s ease;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </header>
  );
};