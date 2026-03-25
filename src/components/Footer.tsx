import { ScrollReveal } from "./ScrollReveal";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background">
      <ScrollReveal delay={0.5}>
        <div className="mx-8 lg:mx-16 pt-8 pb-8 border-t border-foreground/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Jonatham Moraes" className="h-10 w-auto opacity-60" />
            <div>
              <span className="text-sm font-display text-foreground block">
                Jonatham Moraes
              </span>
              <span className="text-xs text-muted-foreground">
                OAB/CE 54.863
              </span>
            </div>
          </div>
          <div className="text-left lg:text-right flex flex-col items-start lg:items-end">
            <p className="text-sm text-foreground/70 font-medium mb-4 lg:mb-3 max-w-sm">
              Atendimento jurídico com ética, sigilo e responsabilidade profissional.
            </p>
            <span className="text-sm text-muted-foreground block">
              © 2026 Jonatham Moraes
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Todos os direitos reservados
            </span>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};
