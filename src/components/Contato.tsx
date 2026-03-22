import { ScrollReveal } from "./ScrollReveal";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export const Contato = () => {
  return (
    <section id="contato" className="relative overflow-visible">
      <div className="relative">
        <div
          className="absolute right-0 -top-32 w-1/3 h-[calc(100%+8rem)] bg-navy-light/50 bg-diagonal-lg" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 py-24 lg:py-40">
          <div className="lg:col-span-7 px-8 lg:pl-16 lg:pr-16">
            <ScrollReveal>
              <div className="mb-12 lg:mb-16">
                <span className="text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-cream">
                  04 — CONTATO
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={0.1}>
              <div className="mb-8 lg:mb-10">
                <div className="relative inline-block">
                  <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full bg-cream/50" />
                  <h2 className="font-display text-4xl lg:text-editorial-lg text-foreground leading-[0.95] pl-6 lg:pl-12">
                    Vamos conversar sobre<br />
                    seu caso?
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-12 lg:mb-16">
                Entre em contato para agendar uma consulta. Estou à
                disposição para esclarecer suas dúvidas e encontrar a melhor
                solução para suas necessidades jurídicas.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="stagger" delay={0.3}>
              <div className="space-y-8">
                <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato via WhatsApp" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-cream/50 transition-colors">
                    <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-cream transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-1.5">
                      WHATSAPP
                    </span>
                    <span className="text-base lg:text-lg font-display text-foreground group-hover:text-cream transition-colors">
                      (88) 99999-9999
                    </span>
                  </div>
                </a>

                <a href="https://www.instagram.com/advjonathammoraes/" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram @advjonathammoraes" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-cream/50 transition-colors">
                    <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-cream transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-1.5">
                      INSTAGRAM
                    </span>
                    <span className="text-base lg:text-lg font-display text-foreground group-hover:text-cream transition-colors">
                      @advjonathammoraes
                    </span>
                  </div>
                </a>

                <a href="mailto:contato@jonathammoraes.adv.br" target="_blank" rel="noopener noreferrer" aria-label="Enviar email para contato@jonathammoraes.adv.br" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-cream/50 transition-colors">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-cream transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-1.5">
                      E-MAIL
                    </span>
                    <span className="text-base lg:text-lg font-display text-foreground group-hover:text-cream transition-colors">
                      contato@jonathammoraes.adv.br
                    </span>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 px-8 lg:px-0 lg:pr-16 flex flex-col justify-center space-y-0 mt-12 lg:mt-0">
            <ScrollReveal delay={0.2}>
              <div className="border-r-2 border-foreground/10 pr-8 py-8">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-3">
                  LOCALIZAÇÃO
                </span>
                <span className="text-base lg:text-lg font-display text-foreground">
                  Ubajara, Ceará
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-r-2 border-foreground/10 pr-8 py-8">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-3">
                  ATENDIMENTO
                </span>
                <span className="text-base lg:text-lg font-display text-foreground block">
                  Segunda a Sexta
                </span>
                <span className="text-base lg:text-lg font-display text-foreground">
                  09h às 18h
                </span>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      <div className="bg-background">
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
            <div className="text-right">
              <span className="text-sm text-muted-foreground block">
                © 2026 Jonatham Moraes — Advocacia e Consultoria Jurídica
              </span>
              <span className="text-xs text-muted-foreground">
                Todos os direitos reservados
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};
