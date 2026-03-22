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
            <span className="text-sm lg:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
              01 — Sobre
            </span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ScrollReveal variant="left" delay={0.1}>
              <blockquote className="relative">
                <div className="absolute -left-4 top-0 w-1 h-20 lg:h-24 bg-cream/40" />
                <p className="font-display text-lg lg:text-2xl leading-relaxed lg:leading-[1.5] italic text-foreground/90 pl-6 lg:pl-8">
                  "Acredito que o exercício da advocacia vai além da técnica jurídica — 
                  é sobre <span className="text-cream">compreender pessoas</span>, 
                  suas histórias e lutar por seus direitos com dedicação integral."
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 lg:mt-16 pl-6 lg:pl-8 space-y-5 lg:space-y-6 text-muted-foreground leading-relaxed max-w-xl">
                <p className="text-base lg:text-lg">
                  Com formação sólida e experiência consolidada, atuo nas áreas de Direito 
                  Civil, Direito do Consumidor e Direito Previdenciário, oferecendo 
                  assessoria jurídica personalizada e estratégica.
                </p>
                <p className="text-base lg:text-lg">
                  Cada caso recebe atenção individualizada, com análise aprofundada e 
                  busca constante pelas melhores soluções para proteger os interesses 
                  de meus clientes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 lg:mt-12 pl-6 lg:pl-8 flex items-end gap-6">
                <div>
                  <p className="font-display text-xl lg:text-xl text-foreground">Jonatham Moraes</p>
                  <p className="text-sm lg:text-sm tracking-widest text-muted-foreground mt-1">OAB/CE 54.863</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
            <ScrollReveal variant="stagger" delay={0.3} className="mt-12 lg:mt-0 space-y-6">
              <div className="border-l-2 border-cream/30 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Formação</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2">Bacharel em Direito</p>
              </div>
              <div className="border-l-2 border-cream/20 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Atuação</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2">Ubajara, Ceará</p>
              </div>
              <div className="border-l-2 border-cream/10 pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Atendimento</p>
                <p className="text-base lg:text-lg font-display text-foreground mt-2">Presencial e Online</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>);

};
