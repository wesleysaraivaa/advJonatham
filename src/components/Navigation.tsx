import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Resultados", href: "#resultados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <nav 
        className={`fixed ${isScrolled ? "top-0" : "top-16"} left-0 right-0 z-50 hidden lg:block transition-all duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "py-6"
        }`}
      >
        <div className="flex items-center justify-between px-16">
          <div className="flex items-center">
            {isScrolled && (
              <a href="#inicio" className="flex items-center gap-3">
                <img src={logo} alt="Jonatham Moraes" className="h-16 w-auto opacity-90" />
              </a>
            )}
          </div>
          <div className="flex items-center gap-10">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link line-reveal animate-fade-in [animation-fill-mode:both] text-[11px] tracking-widest uppercase hover:text-cream transition-colors"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de falar com o advogado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 animate-fade-in [animation-fill-mode:both] hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(194,163,107,0.4)] ${
                isScrolled 
                  ? "border-[#c2a36b]/50 text-[#c2a36b] hover:bg-[#c2a36b] hover:text-background"
                  : "bg-background/90 backdrop-blur-md border-[#c2a36b]/30 text-[#c2a36b] shadow-2xl hover:bg-[#c2a36b] hover:text-background"
              }`}
              style={{ animationDelay: `${links.length * 0.1 + 0.3}s` }}
            >
              Falar com advogado
            </a>
          </div>
        </div>
      </nav>

      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
          aria-expanded={isMobileOpen}
          className="w-12 h-12 flex items-center justify-center bg-navy-light/80 backdrop-blur-sm border border-foreground/10"
        >
          {isMobileOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      <div 
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-display tracking-wide text-foreground hover:text-cream transition-colors"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de falar com o advogado.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 px-8 py-3 rounded-full border border-[#c2a36b] text-[#c2a36b] hover:bg-[#c2a36b] hover:text-background text-xs font-bold tracking-widest uppercase transition-colors"
            style={{ 
              animationDelay: `${links.length * 0.1}s`,
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.3s ease ${links.length * 0.1}s, transform 0.3s ease ${links.length * 0.1}s`
            }}
          >
            Falar com advogado
          </a>
        </div>
      </div>
    </>
  );
};
