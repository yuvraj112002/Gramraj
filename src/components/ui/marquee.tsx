import { cn } from "@/lib/utils";
import { GeometricPattern } from "./geometric-pattern";

interface MarqueeProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export const Marquee = ({ className, speed = "normal" }: MarqueeProps) => {
  const speedClass = {
    slow: "duration-[30s]",
    normal: "duration-[20s]", 
    fast: "duration-[10s]"
  }[speed];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div 
        className={cn(
          "inline-flex items-center animate-[marquee_var(--duration)_linear_infinite]",
          speedClass
        )}
        style={{ "--duration": speed === "slow" ? "30s" : speed === "fast" ? "10s" : "20s" } as React.CSSProperties}
      >
        {/* First set of patterns */}
        <GeometricPattern variant="stripe" className="mr-8" />
        <GeometricPattern variant="stripe" className="mr-8" />
        
        {/* Duplicate for seamless loop */}
        <GeometricPattern variant="stripe" className="mr-8" />
        <GeometricPattern variant="stripe" className="mr-8" />
      </div>
    </div>
  );
};