import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            {/* <GeometricPattern className="w-6 h-6" /> */}
             <img src="logo.png" alt="Gramraj" className="w-12 h-12" />
            <span className="text-xl font-bold">Gramraj</span>
          </div>
          
          <p className="text-neutral-200 text-center md:text-left">
            © 2024 Gramraj. Empowering Rural Bharat through Digital Dignity.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-200 hover:text-brand-orange transition-colors">
              Privacy
            </a>
            <a href="#" className="text-neutral-200 hover:text-brand-orange transition-colors">
              Terms
            </a>
            <a href="#" className="text-neutral-200 hover:text-brand-orange transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};