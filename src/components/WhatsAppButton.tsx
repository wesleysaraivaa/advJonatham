import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5585999999999";
  const message = "Olá! Preciso de ajuda para resolver um problema jurídico.";
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px (past hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 group flex flex-col items-center transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
      
      <span className="absolute bottom-full mb-4 px-6 py-3 backdrop-blur-xl bg-white/[0.03] border border-cream/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Falar com advogado agora
        </span>
      </span>
    </a>
  );
};
