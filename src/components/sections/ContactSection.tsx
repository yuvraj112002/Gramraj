import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GeometricPattern } from "@/components/ui/geometric-pattern";

export const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError(""); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation: check if any field is empty
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill all fields.");
      return;
    }
    setShowModal(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setError("");
  };

  return (
    <section id="contact" className="section bg-[#fff8ef]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
          <ScrollReveal animation="fade-up">
            <form className="space-y-8" onSubmit={handleSubmit}>
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
                    value={form.firstName}
                    onChange={handleChange}
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
                    value={form.lastName}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                {error && (
                  <div className="text-red-600 font-semibold text-center">{error}</div>
                )}
                <Button
                  size="lg"
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={300}>
            <div>
              <img src="contactRight.png" alt="" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative animate-fade-in-down">
            <div className="flex flex-col items-center gap-3">
              <img src="logo.png" alt="Gramraj" className="w-16 h-16 mb-2" />
              <h3 className="text-2xl font-bold text-brand-green mb-2">Thank You!</h3>
              <p className="text-brand-orange font-semibold mb-4">Your message has been submitted successfully.</p>
              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6 mt-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
            {/* Decorative geometric pattern */}
            <div className="absolute bottom-2 right-2 opacity-10 pointer-events-none">
              <GeometricPattern />
            </div>
          </div>
          <style>{`
            .animate-fade-in-down {
              animation: fadeInDown 0.2s ease;
            }
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-10px);}
              to { opacity: 1; transform: translateY(0);}
            }
          `}</style>
        </div>
      )}
    </section>
  );
};