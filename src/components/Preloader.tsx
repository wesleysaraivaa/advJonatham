import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"logo" | "reveal" | "done">("logo");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const logoTimer = setTimeout(() => setPhase("reveal"), 1800);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-background transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transform: phase === "reveal" ? "translateY(-100%)" : "translateY(0)",
        }}
      />

      <img
        src={logo}
        alt="Jonatham Moraes Advocacia"
        className="relative z-10 w-28 lg:w-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: phase === "logo" ? 1 : 0,
          transform: phase === "logo" ? "scale(1)" : "scale(0.8)",
          animationName: phase === "logo" ? "preloaderLogoIn" : undefined,
          animationDuration: "1.2s",
          animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          animationFillMode: "both",
        }}
      />

      <style>{`
        @keyframes preloaderLogoIn {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
