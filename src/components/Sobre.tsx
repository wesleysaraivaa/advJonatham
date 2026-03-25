import { ScrollReveal } from "./ScrollReveal";

export const Sobre = () => {
  return (
    <section id="sobre" className="relative py-24 lg:py-40 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/3 h-full bg-navy-light/50"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }} />

      <div className="relative px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 lg:mb-24">
            <h2 className="text-sm lg:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
              Atendimento direto com o advogado
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ScrollReveal variant="left" delay={0.1}>
              <div className="relative">
                <div className="hidden lg:block absolute -left-6 lg:-left-10 top-2 w-1 h-32 bg-cream/40" />
                <p className="font-display leading-[1.15] lg:leading-[1.1] text-[1.8rem] sm:text-[2.2rem] lg:text-[3rem] xl:text-[3.5rem] text-foreground/90">
                  <span className="font-light italic text-foreground/80 block lg:inline mb-1 lg:mb-0">O Dr. Jonatham Moraes oferece </span>
                  <span className="uppercase tracking-tighter font-bold text-[#c2a36b]">atendimento direto</span>
                  <span className="font-light italic text-foreground/80">, com foco em resolver seu problema com </span>
                  <span className="italic font-serif text-cream">rapidez e segurança.</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 lg:mt-12 pl-6 lg:pl-8 space-y-5 lg:space-y-6 text-muted-foreground leading-relaxed max-w-xl">
                <p className="text-base lg:text-lg">
                  Cada caso é analisado com atenção e estratégia, buscando sempre a melhor solução de acordo com a sua situação.
                </p>
                <p className="text-base lg:text-lg">  
                  O atendimento é feito com clareza, proximidade e responsabilidade.
                </p>
                <p className="text-base lg:text-lg">
                  Você entenda exatamente o que está acontecendo em cada etapa.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 lg:mt-14 pl-6 lg:pl-8 flex flex-col gap-6">
                <div>
                  <p className="font-display text-xl lg:text-xl text-foreground">Pronto para resolver seu problema?</p>
                </div>
                
                <a
                  href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de falar diretamente com o doutor para resolver meu problema jurídico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-[12px] lg:text-[13px] tracking-widest uppercase hover:bg-[#20ba59] shadow-[0_15px_45px_-10px_rgba(37,211,102,0.4)] transition-all duration-300 w-fit"
                >
                  Falar com advogado agora
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
            <ScrollReveal variant="stagger" delay={0.3} className="mt-12 lg:mt-0 space-y-6">
              <div className="border-l-2 border-cream/30 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">OAB</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2">54.863 - CE</p>
              </div>
              <div className="border-l-2 border-cream/20 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Atuação</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2 leading-relaxed lg:leading-relaxed">Ubajara – CE e todo o Brasil</p>
              </div>
              <div className="border-l-2 border-cream/10 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Atendimento</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2">Online e presencial</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>);

};
