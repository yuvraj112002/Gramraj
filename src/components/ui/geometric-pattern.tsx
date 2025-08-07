import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  className?: string;
  variant?: "single" | "grid" | "stripe";
  animated?: boolean;
}

export const GeometricPattern = ({ 
  className, 
  variant = "single", 
  animated = false 
}: GeometricPatternProps) => {
  const PatternElement = () => (
    <div className="relative w-16 h-16">
      {/* Orange curved element */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-brand-orange rounded-bl-full" />
      {/* Yellow curved element */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-brand-yellow rounded-br-full" />
      {/* Green curved element */}
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-brand-green rounded-tr-full" />
      {/* Orange bottom-right curved element */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-orange rounded-tl-full" />
    </div>
  );

  if (variant === "single") {
    return (
      <div className={cn("inline-block", animated && "hover:scale-110 transition-transform duration-300", className)}>
        <PatternElement />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn("grid grid-cols-4 gap-2", className)}>
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i} className={animated ? "hover:scale-110 transition-transform duration-300" : ""}>
            <PatternElement />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "stripe") {
    return (
      <div className={cn("flex gap-2 items-center", className)}>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i}>
            <PatternElement />
          </div>
        ))}
      </div>
    );
  }

  return null;
};