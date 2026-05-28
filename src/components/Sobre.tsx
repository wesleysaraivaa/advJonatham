import { ScrollReveal } from "./ScrollReveal";

export const Sobre = () => {
  return (
    <section id="sobre" className="relative py-32 lg:py-48 overflow-hidden">
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
              <div className="relative inline-block mb-4 lg:mb-8">
                <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full bg-cream/50" />
                <p className="font-display leading-[1.2] lg:leading-[1.1] text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.4rem] text-foreground tracking-tight pl-6 lg:pl-12">
                  <span className="uppercase tracking-tighter font-bold text-[#c2a36b] pr-2 block mb-1">Atendimento direto,</span>
                  <span className="font-normal text-foreground block mb-1">com foco em resolver seu problema </span>
                  <span className="font-light italic font-serif text-cream block">com rapidez e segurança.</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 lg:mt-10 pl-6 lg:pl-12 space-y-6 lg:space-y-8 text-muted-foreground leading-loose max-w-2xl">
                <p className="text-lg lg:text-xl">
                  Cada caso é analisado com atenção e estratégia, buscando sempre a melhor solução jurídica para a sua situação.
                </p>
                <p className="text-lg lg:text-xl">  
                  Atuamos com total clareza e proximidade, garantindo que você entenda exatamente o que está acontecendo em cada etapa do processo.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 lg:mt-14 pl-6 lg:pl-8 flex flex-col gap-6">
                <div>
                  <p className="font-display text-xl lg:text-xl text-foreground">Precisa de ajuda jurídica agora?</p>
                </div>
                
                <a
                  href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de falar diretamente com o doutor para resolver meu problema jurídico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#25D366] text-white font-bold text-[12px] lg:text-[13px] tracking-widest uppercase hover:bg-[#20ba59] shadow-[0_15px_45px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 w-fit"
                >
                  Falar com advogado agora
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center mt-16 lg:mt-12 w-full">
            <ScrollReveal delay={0.3}>
              <div className="bg-navy-light/10 backdrop-blur-md border border-foreground/5 rounded-2xl p-8 lg:p-12 space-y-10 relative overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-cream/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div>
                  <span className="text-xs lg:text-sm tracking-[0.4em] uppercase text-foreground/90 block font-bold mb-3">
                    CREDENCIAMENTO
                  </span>
                  <div className="h-px w-24 bg-[#c2a36b]/80 mt-4 mb-2" />
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 block mb-2 font-medium">
                    Inscrição OAB
                  </span>
                  <span className="text-base lg:text-lg font-display text-foreground">
                    00.000 - CE
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 block mb-2 font-medium">
                    Atuação
                  </span>
                  <span className="text-base lg:text-lg font-display text-foreground block leading-snug">
                    Ubajara - CE <br /> e todo o Brasil
                  </span>
                </div>

                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#c2a36b]/70 block mb-5 font-medium">
                    Formato de Atendimento
                  </span>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-foreground/90">
                      <div className="w-2 h-2 rounded-full bg-[#c2a36b]" />
                      <span className="text-sm">Consultoria Online</span>
                    </li>
                    <li className="flex items-center gap-4 text-foreground/90">
                      <div className="w-2 h-2 rounded-full bg-[#c2a36b]" />
                      <span className="text-sm">Agendamento Presencial</span>
                    </li>
                  </ul>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>);

};
