import logo from "@/assets/logo.png";
import portrait from "@/assets/jonatham-portrait.jpg";
import { useEffect, useRef, useState } from "react";
import { ChevronsDown } from "lucide-react";


const ParallaxPhoto = ({ src, alt, position = "object-center" }: {src: string; alt: string; position?: string;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = rect.top / window.innerHeight;
      setOffset(scrollProgress * -40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-[120%] object-cover animate-photo-reveal opacity-0 [animation-fill-mode:both] ${position}`}
        style={{
          animationDelay: "0.3s",
          filter: "contrast(1.1) brightness(0.9)",
          transform: `translateY(${offset}px) scale(1)`,
          transition: "transform 0.1s linear"
        }} />
      
    </div>);

};

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col overflow-hidden">
      
      <div className="lg:hidden flex flex-col min-h-[100dvh]">
        <div className="relative h-[45vh] min-h-[340px] max-h-[460px] flex-shrink-0 overflow-hidden">
          <ParallaxPhoto src={portrait} alt="Dr. Jonatham Moraes" position="object-top sm:object-[center_15%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          
          <div className="absolute top-6 left-6 z-10 animate-fade-in opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1.2s" }}>
            <img src={logo} alt="Jonatham Moraes Advocacia" className="w-14 h-auto" />
          </div>

          <div className="absolute bottom-6 left-6 z-20 animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1.5s" }}>
            <div className="backdrop-blur-md bg-white/[0.02] border border-cream/10 px-5 py-3 rounded-2xl w-fit">
              <div className="flex flex-col">
                <p className="text-[12px] font-display italic text-cream/80 tracking-wider">Dr. Jonatham Moraes</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <p className="text-[8px] sm:text-[9px] text-foreground/50 uppercase tracking-widest">OAB/CE 54.863</p>
                  <span className="w-1 h-1 rounded-full bg-cream/20" />
                  <p className="text-[8px] sm:text-[9px] text-foreground/50 uppercase tracking-widest">Brasil Todo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 bg-background px-6 py-8 sm:py-12 flex flex-col justify-center text-center">
          <div className="relative z-10">
            <h1 className="font-display leading-[1.0] text-[2.2rem] sm:text-[2.8rem] mb-8 sm:mb-10">
              <span className="block text-foreground/90 font-light italic text-[1.8rem] sm:text-[2.4rem] mb-1">Resolva seu</span>
              <span className="block text-foreground uppercase tracking-tight font-bold mt-1 text-[#c2a36b]"> problema</span>
              <span className="block text-cream italic font-light text-[1.8rem] sm:text-[2.4rem]">Jurídico antes que ele piore.</span>
            </h1>

            <p className="text-[14px] sm:text-[16px] tracking-wide text-foreground/80 leading-[1.6] sm:leading-[1.7] mb-10 sm:mb-14 max-w-[280px] sm:max-w-[320px] mx-auto animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "2s" }}>
              Atendimento direto, rápido e sem burocracia para resolver sua situação.
            </p>

            <div className="animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "2.4s" }}>
              <a
                href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Preciso de ajuda para resolver um problema jurídico.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-[#25D366] text-white font-bold text-[13px] sm:text-[14px] tracking-widest uppercase hover:bg-[#20ba59] shadow-[0_15px_45px_-10px_rgba(37,211,102,0.6)] transition-all duration-300"
              >
                Falar com advogado agora
              </a>
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-cream/40 px-4 py-2 bg-white/[0.03] border border-cream/10 rounded-full w-fit mx-auto">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span>Online agora — atendimento imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:h-screen">
        <div
          className="absolute inset-0 bg-background overflow-hidden">
          <div className="absolute top-0 right-0 w-[55%] h-full">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}>
              <ParallaxPhoto src={portrait} alt="Dr. Jonatham Moraes" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            </div>

            <div className="absolute bottom-16 left-0 z-30 animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "2.2s" }}>
              <div className="backdrop-blur-md bg-white/[0.02] border border-cream/10 p-6 rounded-3xl max-w-[280px]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-5 h-auto opacity-70" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream/90 tracking-wide">Dr. Jonatham Moraes</h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/50">Advogado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-foreground/60 uppercase">
                    <span>OAB/CE</span>
                    <span className="text-cream/80">54.863</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-cream/10 to-transparent" />
                  <div className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-cream/20" />
                     <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/50">Atendimento em todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-16 left-16 z-10 animate-fade-in opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "0.4s" }}>
          <img src={logo} alt="Jonatham Moraes Advocacia" className="w-32 h-auto" />
        </div>

        <div className="relative z-10 px-16 max-w-[50%]">
          <div className="relative mb-12 xl:mb-16">
            <h1 className="font-display leading-[0.95] animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "0.8s" }}>
              <span className="block text-4xl lg:text-5xl xl:text-6xl 2xl:text-editorial-lg text-foreground/80 font-light italic mb-2">Resolva seu</span>
              <span className="block text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] text-foreground uppercase tracking-tighter font-bold -ml-2 text-[#c2a36b]">Problema</span>
              <span className="block text-4xl lg:text-5xl xl:text-6xl 2xl:text-editorial-lg text-cream italic font-serif mt-2">jurídico antes que ele piore.</span>
            </h1>
          </div>

          <div
            className="mt-12 xl:mt-20 max-w-xl animate-fade-up opacity-0 [animation-fill-mode:both]"
            style={{ animationDelay: "1.2s" }}>
            <p className="text-xl lg:text-2xl xl:text-3xl tracking-wide text-foreground/70 leading-[1.8] mb-12 xl:mb-16 font-light">
              Fale agora com o Dr. Jonatham Moraes. Atendimento <span className="text-foreground font-normal">direto, rápido e sem burocracia</span> para resolver sua situação.
            </p>
            
            <div className="flex items-center gap-4 mb-8 xl:mb-12">
               <div className="flex items-center gap-4 xl:gap-5 px-6 xl:px-8 py-3 xl:py-4 rounded-full bg-white/[0.1] border border-cream/40 backdrop-blur-md shadow-2xl">
                 <span className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.9)]" />
                 <span className="text-[11px] xl:text-[13px] uppercase tracking-[0.3em] xl:tracking-[0.4em] text-cream font-black">Online agora — atendimento imediato</span>
               </div>
            </div>

            <div className="flex items-center gap-8">
              <a
                href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Preciso de ajuda para resolver um problema jurídico.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 xl:gap-6 px-10 xl:px-16 py-6 xl:py-8 rounded-full bg-[#25D366] text-white font-black text-[0.9rem] xl:text-[1.1rem] tracking-[0.2em] xl:tracking-[0.25em] uppercase overflow-hidden shadow-[0_25px_60px_-15px_rgba(37,211,102,0.65)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_30px_70px_-10px_rgba(37,211,102,0.75)]"
                aria-label="Falar com advogado agora"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span>Falar com advogado agora</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-16 animate-fade-in opacity-0 [animation-fill-mode:both]"
          style={{ animationDelay: "3s" }}>
          <div className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-px w-20 bg-cream/20 group-hover:w-32 transition-all duration-500" />
            <span className="text-[10px] tracking-[0.8em] uppercase text-cream/40">
              RESOLVA HOJE
            </span>
            <ChevronsDown className="w-4 h-4 text-cream animate-bounce" />
          </div>
        </div>
      </div>
    </section>);

};
