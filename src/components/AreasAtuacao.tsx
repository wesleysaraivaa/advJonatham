import { Scale, ShieldCheck, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const AreasAtuacao = () => {
  const areas = [
  {
    id: "01",
    title: "Problemas com contratos, família ou bens?",
    description:
    "Questões envolvendo contratos, família, bens ou heranças precisam de orientação jurídica segura para evitar prejuízos.",
    keywords: ["Contratos", "Família", "Bens"],
    Icon: Scale
  },
  {
    id: "02",
    title: "Banco, empresa ou cobrança indevida?",
    description:
    "Cobranças indevidas, negativação ou abusos de empresas podem ser resolvidos com apoio jurídico adequado.",
    keywords: ["Bancos", "Empresas", "Cobranças"],
    Icon: ShieldCheck
  },
  {
    id: "03",
    title: "Benefício negado pelo INSS?",
    description:
    "Aposentadorias, pensões e benefícios negados podem ser revisados para garantir seus direitos.",
    keywords: ["INSS", "Aposentadoria", "Benefícios"],
    Icon: Heart
  }];


  return (
    <section id="atuacao" className="relative py-40 lg:py-64 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light bg-section-diagonal" />
      <div className="absolute -right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none">
        <Scale className="w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[28rem] text-cream/[0.03] stroke-[0.3]" />
      </div>
      <div className="relative px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 lg:mb-20">
            <span className="text-sm lg:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
              Como posso te ajudar?
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={0.1}>
          <div className="mb-16 lg:mb-32">
            <div className="relative inline-block">
              <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full max-h-32 bg-cream/50" />
              <h2 className="font-display leading-[1.05] lg:leading-[1.0] text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] text-foreground tracking-tight pl-6 lg:pl-12">
                Em quais situações <br className="hidden md:block" />
                <span className="text-cream font-light italic font-serif">posso te ajudar.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-0 lg:gap-0">
          {areas.map((area, index) =>
          <ScrollReveal key={area.id} delay={0.2 + index * 0.1} className="h-full">
              <div
              className={`group relative flex flex-col h-full ${
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

                <h3 className="font-display font-semibold text-2xl lg:text-3xl xl:text-[2.2rem] text-foreground mb-4 lg:mb-6 leading-[1.15] lg:leading-[1.1] tracking-tight pr-4 group-hover:text-cream transition-colors duration-300 lg:min-h-[100px] xl:min-h-[120px]">
                  {area.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-5 lg:mb-6 max-w-xs">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
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
          <div className="mt-20 lg:mt-32 flex flex-col items-center justify-center gap-8">
            <h3 className="font-display text-xl lg:text-2xl xl:text-[2rem] text-foreground text-center">Não encontrou sua situação?</h3>
            <a
              href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de saber se o doutor atende o meu caso jurídico.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#25D366] text-white font-bold text-[12px] lg:text-[13px] tracking-widest uppercase hover:bg-[#20ba59] shadow-[0_15px_45px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 w-fit"
            >
              Falar com advogado agora
            </a>
            <div className="flex items-center justify-center gap-6 mt-6 w-full opacity-80">
              <div className="h-px w-12 lg:w-20 bg-foreground/20" />
              <span className="text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.5em] uppercase text-muted-foreground/60">
                Atendimento rápido • Sigilo absoluto
              </span>
              <div className="h-px w-12 lg:w-20 bg-foreground/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute left-8 lg:left-16 top-32 w-12 h-12 border-t border-l border-cream/10" />
      <div className="absolute right-8 lg:right-16 bottom-32 w-8 h-8 border-b border-r border-cream/10" />
    </section>);

};
