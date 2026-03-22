import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Diferenciais = () => {
  const depoimentos = [
    {
      id: "01",
      texto: "Profissional extremamente dedicado e competente. Resolveu minha questão previdenciária com agilidade e sempre me manteve informado sobre cada etapa do processo.",
      autor: "Maria Souza",
      cargo: "Aposentada",
    },
    {
      id: "02",
      texto: "Atendimento humanizado e transparente. Dr. Jonatham foi fundamental na resolução do meu problema com a operadora de telefonia. Recomendo sem hesitar.",
      autor: "Carlos Mendes",
      cargo: "Empresário",
    },
    {
      id: "03",
      texto: "Excelente advogado! Me auxiliou em uma questão de família muito delicada com toda a sensibilidade e profissionalismo necessários.",
      autor: "Ana Paula",
      cargo: "Professora",
    },
  ];

  return (
    <section className="relative py-16 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light bg-section-diagonal" />

      <div className="absolute -left-10 top-1/4 pointer-events-none hidden xl:block">
        <Quote 
          className="w-64 h-64 text-cream/[0.03] stroke-[0.3]" 
          style={{ transform: "rotate(-10deg)" }}
        />
      </div>

      <div className="relative px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 lg:mb-20">
            <span className="text-sm lg:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase text-muted-foreground">
              03 — Comentários
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={0.1}>
          <div className="mb-16 lg:mb-32">
            <div className="relative inline-block">
              <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full bg-cream/50" />
              <h2 className="font-display text-4xl lg:text-editorial-lg text-foreground leading-[0.9] pl-6 lg:pl-12">
                O que dizem<br />
                <span className="text-cream">nossos clientes.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-0">
          {depoimentos.map((depoimento, index) => (
            <ScrollReveal key={depoimento.id} delay={0.2 + index * 0.1}>
              <div
                className={`group relative ${
                  index !== depoimentos.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } border-foreground/10 py-12 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0`}
              >
                <div className="relative mb-8 lg:mb-12">
                  <Quote 
                    className="w-12 h-12 lg:w-16 lg:h-16 text-cream/30 stroke-[0.8] transition-all duration-500 group-hover:text-cream/50 group-hover:scale-110" 
                  />
                  <span className="absolute -top-4 left-8 text-5xl font-display text-foreground/10 group-hover:text-cream/20 transition-colors duration-500">
                    {depoimento.id}
                  </span>
                </div>

                <blockquote className="text-foreground/90 leading-relaxed text-base lg:text-lg mb-6 lg:mb-8 max-w-sm group-hover:text-foreground transition-colors duration-300">
                  "{depoimento.texto}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center">
                    <span className="text-cream/60 font-display text-base">
                      {depoimento.autor.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-base lg:text-base font-display text-foreground">{depoimento.autor}</p>
                    <p className="text-sm lg:text-sm text-muted-foreground">{depoimento.cargo}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3 h-3 text-cream/40 fill-cream/40" 
                    />
                  ))}
                </div>

                <div className="mt-8 h-px w-0 bg-cream/50 group-hover:w-full transition-all duration-700" />

                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-cream/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 lg:mt-32 flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-foreground/10" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground/40">
              Confiança & Resultados
            </span>
            <div className="h-px w-20 bg-foreground/10" />
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute right-8 lg:right-16 top-32 w-12 h-12 border-t border-r border-cream/10" />
      <div className="absolute left-8 lg:left-16 bottom-32 w-8 h-8 border-b border-l border-cream/10" />
    </section>
  );
};
