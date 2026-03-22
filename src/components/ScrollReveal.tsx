import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale" | "stagger";
  delay?: number;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  className,
  variant = "up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const variantClasses = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
    stagger: "scroll-reveal-stagger",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(variantClasses[variant], isVisible && "visible", className)}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
};
