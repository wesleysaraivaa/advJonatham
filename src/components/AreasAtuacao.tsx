import { Scale, ShieldCheck, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const AreasAtuacao = () => {
  const areas = [
  {
    id: "01",
    title: "Direito Civil",
    description:
    "Contratos, responsabilidade civil, direito de família, sucessões e questões patrimoniais.",
    keywords: ["Contratos", "Família", "Sucessões"],
    Icon: Scale
  },
  {
    id: "02",
    title: "Direito do Consumidor",
    description:
    "Defesa dos direitos nas relações de consumo. Ações contra empresas, bancos e operadoras.",
    keywords: ["Bancos", "Empresas", "Serviços"],
    Icon: ShieldCheck
  },
  {
    id: "03",
    title: "Direito Previdenciário",
    description:
    "Aposentadorias, pensões, benefícios por incapacidade e revisões junto ao INSS.",
    keywords: ["INSS", "Aposentadoria", "Benefícios"],
    Icon: Heart
  }];


  return (
    <section id="atuacao" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light bg-section-diagonal" />
      <div className="absolute -right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none">
        <Scale className="w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[28rem] text-cream/[0.03] stroke-[0.3]" />
      </div>
      <div className="relative px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 lg:mb-20">
            <span className="text-sm lg:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
              02 — Áreas de Atuação
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={0.1}>
          <div className="mb-16 lg:mb-32">
            <div className="relative inline-block">
              <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full bg-cream/50" />
              <h2 className="font-display text-4xl lg:text-editorial-lg text-foreground leading-[0.9] pl-6 lg:pl-12">
                Três pilares.<br />
                <span className="text-cream">Uma missão.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-0 lg:gap-0">
          {areas.map((area, index) =>
          <ScrollReveal key={area.id} delay={0.2 + index * 0.1}>
              <div
              className={`group relative ${
              index !== areas.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""} border-foreground/10 py-12 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0`
              }>
                <div className="relative mb-8 lg:mb-12">
                  <div className="relative">
                    <area.Icon
                    className="w-20 h-20 lg:w-28 lg:h-28 text-cream/20 stroke-[0.5] transition-all duration-500 group-hover:text-cream/40 group-hover:scale-110" />
                  </div>
                  <span className="absolute -top-4 -left-2 text-6xl font-display text-foreground/10 group-hover:text-cream/20 transition-colors duration-500">
                    {area.id}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-editorial-md text-foreground mb-3 lg:mb-4 group-hover:text-cream transition-colors duration-300">
                  {area.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-5 lg:mb-6 max-w-xs">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {area.keywords.map((keyword) =>
                <span
                  key={keyword}
                  className="text-xs lg:text-xs tracking-[0.25em] lg:tracking-[0.3em] uppercase text-cream/60 group-hover:text-cream/80 transition-colors duration-300">
                      {keyword}
                    </span>
                )}
                </div>

                <div className="mt-8 h-px w-0 bg-cream/50 group-hover:w-full transition-all duration-700" />

                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-cream/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 lg:mt-32 flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-foreground/10" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground/40">
              Atuação Integral
            </span>
            <div className="h-px w-20 bg-foreground/10" />
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute left-8 lg:left-16 top-32 w-12 h-12 border-t border-l border-cream/10" />
      <div className="absolute right-8 lg:right-16 bottom-32 w-8 h-8 border-b border-r border-cream/10" />
    </section>);

};
