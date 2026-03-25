import { ScrollReveal } from "./ScrollReveal";
import { MessageCircle, Mail, Instagram } from "lucide-react";

export const Contato = () => {
  return (
    <section id="contato" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-navy-light/40" />
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-diagonal-lg opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none" />

      <div className="relative">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 py-32 lg:py-48">
          <div className="lg:col-span-7 px-8 lg:pl-16 lg:pr-16">
            <ScrollReveal>
              <div className="mb-12 lg:mb-16">
                <span className="text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
                  Atendimento Direto com o Advogado
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={0.1}>
              <div className="mb-8 lg:mb-10">
                <div className="relative inline-block">
                  <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full bg-cream/50" />
                  <h2 className="font-display leading-[1.0] lg:leading-[0.95] text-[3rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-foreground tracking-tight pl-6 lg:pl-12">
                    Vamos conversar sobre<br className="hidden md:block" />
                    <span className="text-cream font-light italic font-serif">o seu caso?</span>
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10 lg:mb-12">
                Fale diretamente com o advogado e receba orientação imediata para o seu caso.
              </p>
              <div className="mb-20 lg:mb-28">
                <a
                  href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de uma orientação imediata sobre o meu caso.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-6 rounded-full bg-[#25D366] text-white font-bold text-[13px] lg:text-[14px] tracking-[0.2em] uppercase hover:bg-[#20ba59] shadow-[0_20px_60px_-10px_rgba(37,211,102,0.6)] hover:shadow-[0_20px_80px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300 w-fit"
                >
                  Falar com advogado agora
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="stagger" delay={0.3}>
              <div className="space-y-12">
                <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato via WhatsApp" className="flex items-start gap-5 lg:gap-6 group">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-[rgba(37,211,102,0.4)] flex items-center justify-center mt-0.5 group-hover:border-[#25D366] transition-colors">
                    <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 text-[#25D366] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1.5 flex items-center gap-2">
                      WHATSAPP <span className="text-[#25D366] text-[9px] lowercase tracking-normal font-medium bg-[#25D366]/10 px-2 py-0.5 rounded-full">(Atendimento mais rápido)</span>
                    </span>
                    <span className="text-xl lg:text-2xl font-display font-semibold text-foreground group-hover:text-cream transition-colors">
                      (88) 99999-9999
                    </span>
                  </div>
                </a>

                <a href="https://www.instagram.com/advjonathammoraes/" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram @advjonathammoraes" className="flex items-start gap-5 lg:gap-6 group">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-cream/50 transition-colors">
                    <Instagram className="w-6 h-6 lg:w-7 lg:h-7 text-muted-foreground group-hover:text-cream transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-1.5">
                      INSTAGRAM
                    </span>
                    <span className="text-lg lg:text-xl font-display text-foreground group-hover:text-cream transition-colors">
                      @advjonathammoraes
                    </span>
                  </div>
                </a>

                <a href="mailto:contato@jonathammoraes.adv.br" target="_blank" rel="noopener noreferrer" aria-label="Enviar email para contato@jonathammoraes.adv.br" className="flex items-start gap-5 lg:gap-6 group">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5 group-hover:border-cream/50 transition-colors">
                    <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-muted-foreground group-hover:text-cream transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-1.5">
                      E-MAIL
                    </span>
                    <span className="text-lg lg:text-xl font-display text-foreground group-hover:text-cream transition-colors">
                      contato@jonathammoraes.adv.br
                    </span>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 px-8 lg:px-0 lg:pr-16 flex flex-col justify-center mt-16 lg:mt-0 w-full">
            <ScrollReveal delay={0.2}>
              <div className="bg-navy-light/10 backdrop-blur-md border border-foreground/5 rounded-2xl p-8 lg:p-12 space-y-8 relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-cream/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div>
                  <span className="text-xs lg:text-sm tracking-[0.4em] uppercase text-foreground/90 block font-bold mb-3">
                    INFORMAÇÕES
                  </span>
                  <div className="h-px w-16 bg-[#c2a36b]/60 mt-4 mb-2" />
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 block mb-2 font-medium">
                    Localização
                  </span>
                  <span className="text-base lg:text-lg font-display text-foreground">
                    Ubajara, Ceará
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 block mb-2 font-medium">
                    Atendimento
                  </span>
                  <span className="text-base lg:text-lg font-display text-foreground block">
                    Segunda a Sexta
                  </span>
                  <span className="text-base lg:text-lg font-display text-foreground">
                    09h às 18h
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#c2a36b]/70 block mb-5 font-medium">
                    Compromissos
                  </span>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-foreground/90">
                      <div className="w-2 h-2 rounded-full bg-[#c2a36b]" />
                      <span className="text-sm">Atendimento imediato</span>
                    </li>
                    <li className="flex items-center gap-4 text-foreground/90">
                      <div className="w-2 h-2 rounded-full bg-[#c2a36b]" />
                      <span className="text-sm">Sigilo absoluto</span>
                    </li>
                    <li className="flex items-center gap-4 text-foreground/90">
                      <div className="w-2 h-2 rounded-full bg-[#c2a36b]" />
                      <span className="text-sm">Resposta rápida</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  );
};
