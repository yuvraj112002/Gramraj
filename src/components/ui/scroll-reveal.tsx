import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

export const ScrollReveal = ({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0,
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "slide-right": "animate-slide-in-right", 
    "scale-in": "animate-scale-in"
  }[animation];

  return (
    <div 
      ref={elementRef}
      className={cn(
        animationClass,
        isVisible && "in-view",
        className
      )}
    >
      {children}
    </div>
  );
};