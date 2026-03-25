import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Diferenciais = () => {
  const depoimentos = [
    {
      id: "01",
      texto: "Tive um problema com minha aposentadoria e não sabia o que fazer. O Dr. Jonatham resolveu tudo com rapidez e clareza. Hoje estou tranquila.",
      autor: "Maria Souza",
      cargo: "Cliente – Aposentada",
    },
    {
      id: "02",
      texto: "Uma empresa estava me cobrando indevidamente e sujando meu nome. O doutor assumiu o caso, limpou meu nome e ainda conseguiu uma indenização justa.",
      autor: "Carlos Mendes",
      cargo: "Cliente – Empresário",
    },
    {
      id: "03",
      texto: "Estava perdido com um contrato mal feito que quase me deu prejuízo. Ele analisou tudo em detalhes e evitou um prejuízo financeiro.",
      autor: "Ana Paula",
      cargo: "Cliente – Professora",
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
              Resultados Reais
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={0.1}>
          <div className="mb-12 lg:mb-20">
            <div className="relative inline-block">
              <div className="absolute -left-4 lg:-left-8 top-0 w-1 h-full max-h-32 bg-cream/50" />
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] text-foreground leading-[1.0] lg:leading-[0.9] tracking-tighter pl-6 lg:pl-12">
                Veja como já ajudamos <br className="hidden md:block" />
                <span className="text-cream font-light italic font-serif">outros clientes.</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-16 lg:mb-32 pl-6 lg:pl-12">
            <p className="text-[10px] lg:text-xs tracking-[0.3em] lg:tracking-[0.4em] uppercase text-cream/70 font-semibold border-l-2 border-[#c2a36b] pl-4">
              Atendimento em todo o Brasil • Clientes atendidos diariamente
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-0 lg:gap-0">
          {depoimentos.map((depoimento, index) => (
            <ScrollReveal key={depoimento.id} delay={0.2 + index * 0.1} className="h-full">
              <div
                className={`group relative flex flex-col h-full ${
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

                <blockquote className="text-foreground/90 leading-relaxed text-base lg:text-lg mb-6 lg:mb-8 max-w-sm flex-grow group-hover:text-foreground transition-colors duration-300">
                  "{depoimento.texto}"
                </blockquote>

                <div className="flex flex-col mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center">
                      <span className="text-cream/60 font-display text-base">
                        {depoimento.autor.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-base lg:text-base font-display text-foreground">{depoimento.autor}</p>
                      <p className="text-sm lg:text-sm text-[#c2a36b]">{depoimento.cargo}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-90 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 h-px w-0 bg-cream/50 group-hover:w-full transition-all duration-700" />

                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-cream/20 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 lg:mt-32 flex flex-col items-center justify-center gap-8">
            <h3 className="font-display text-2xl lg:text-3xl text-foreground text-center">Pronto para resolver sua situação também?</h3>
            <a
              href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Vi os resultados que o doutor conseguiu e gostaria de falar sobre o meu problema jurídico.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-2 gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-[12px] lg:text-[13px] tracking-widest uppercase hover:bg-[#20ba59] shadow-[0_15px_45px_-10px_rgba(37,211,102,0.4)] transition-all duration-300 w-fit"
            >
              Falar com advogado agora
            </a>
            <div className="flex items-center justify-center gap-6 mt-6 w-full opacity-80">
              <div className="h-px w-12 lg:w-20 bg-foreground/20" />
              <span className="text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.5em] uppercase text-muted-foreground/60 text-center">
                Atendimento com foco em segurança e resultado
              </span>
              <div className="h-px w-12 lg:w-20 bg-foreground/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute right-8 lg:right-16 top-32 w-12 h-12 border-t border-r border-cream/10" />
      <div className="absolute left-8 lg:left-16 bottom-32 w-8 h-8 border-b border-l border-cream/10" />
    </section>
  );
};
