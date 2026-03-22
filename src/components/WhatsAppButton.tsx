import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5585999999999";
  const message = "Olá! Gostaria de agendar uma consulta.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/40">
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale comigo
      </span>
    </a>
  );
};
