import logo from "@/assets/logo.png";
import portrait from "@/assets/jonatham-portrait.jpg";
import { useEffect, useRef, useState } from "react";
import { ChevronsDown } from "lucide-react";

const AnimatedLetters = ({
  text,
  className,
  baseDelay = 0




}: {text: string;className?: string;baseDelay?: number;}) => {
  return (
    <span className={className} style={{ perspective: "600px" }}>
      {text.split("").map((char, i) =>
      <span
        key={i}
        className="inline-block animate-letter-fade opacity-0 [animation-fill-mode:both]"
        style={{ animationDelay: `${baseDelay + i * 0.07}s` }}>
        
          {char === " " ? "\u00A0" : char}
        </span>
      )}
    </span>);

};

const ParallaxPhoto = ({ src, alt }: {src: string;alt: string;}) => {
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
        className="w-full h-[120%] object-cover object-center animate-photo-reveal opacity-0 [animation-fill-mode:both]"
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
      
      <div className="lg:hidden flex flex-col h-screen">
        <div className="relative h-[55vh] flex-shrink-0 overflow-hidden">
          <ParallaxPhoto src={portrait} alt="Dr. Jonatham Moraes" />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

          <div className="absolute top-6 left-6 z-10 animate-fade-in opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1.2s" }}>
            <img src={logo} alt="Jonatham Moraes Advocacia" className="w-14 h-auto" />
          </div>

          <div className="absolute top-6 right-6 animate-fade-in opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1.6s" }}>
            <div className="w-12 h-12 border-t-2 border-r-2 border-cream/50" />
          </div>
          <div className="absolute bottom-20 left-6 animate-fade-in opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1.8s" }}>
            <div className="w-10 h-10 border-l-2 border-b-2 border-cream/40" />
          </div>
        </div>

        <div className="relative flex-1 bg-background px-6 pt-6 pb-8 flex flex-col justify-between">
          <div
            className="absolute top-0 left-0 right-0 h-16 bg-navy-light -translate-y-8"
            style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }} />
          

          <div className="relative z-10">
            <div className="mb-5 animate-clip-reveal opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "1s", clipPath: "inset(0 100% 0 0)" }}>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs tracking-[0.2em] uppercase text-cream/90">
                <span>Cível</span>
                <span className="text-cream/40">•</span>
                <span>Consumidor</span>
                <span className="text-cream/40">•</span>
                <span>Previdenciário</span>
              </div>
            </div>

            <h1 className="font-display leading-[0.9]" style={{ fontSize: "clamp(2.8rem, 12vw, 4rem)" }}>
              <span className="block overflow-visible py-4">
                <AnimatedLetters text="Jonatham" className="text-foreground" baseDelay={1.0} />
              </span>
              <span className="block ml-[8vw] overflow-visible py-4">
                <AnimatedLetters text="Moraes" className="text-cream" baseDelay={1.8} />
              </span>
            </h1>

            <div className="mt-5 animate-fade-up opacity-0 [animation-fill-mode:both]" style={{ animationDelay: "2.4s" }}>
              <p className="text-base tracking-wide text-foreground/90 leading-relaxed">
                Advocacia e Consultoria Jurídica
              </p>
              <p className="mt-2 text-sm tracking-widest text-cream/70">OAB/CE 54.863</p>
            </div>

            <div className="mt-6 h-px bg-cream/50 max-w-[140px] animate-line-expand [animation-fill-mode:both]" style={{ animationDelay: "2.8s" }} />
            

          </div>

          <div className="mt-8">
            <div className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground/60">
              DESÇA PARA CONHECER
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:h-screen">
        <div
          className="absolute inset-0 bg-navy-light origin-top-left"
          style={{ clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)" }} />

        <div className="absolute right-0 top-0 w-[50%] h-full">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <ParallaxPhoto src={portrait} alt="Dr. Jonatham Moraes" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          </div>

          <div
            className="absolute right-8 bottom-8 animate-fade-in opacity-0 [animation-fill-mode:both]"
            style={{ animationDelay: "2.2s" }}>
            <div className="w-16 h-16 border-b-2 border-r-2 border-cream/20" />
          </div>

          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 animate-fade-in opacity-0 [animation-fill-mode:both]"
            style={{ animationDelay: "2.5s" }}>
            <div
              className="text-[10px] tracking-[0.6em] text-cream/40 uppercase"
              style={{ writingMode: "vertical-rl" }}>
              Seu direito, nossa causa
            </div>
          </div>
        </div>

        <div
          className="absolute top-16 left-16 z-10 animate-fade-in opacity-0 [animation-fill-mode:both]"
          style={{ animationDelay: "0.4s" }}>
          <img src={logo} alt="Jonatham Moraes Advocacia" className="w-32 h-auto" />
        </div>

        <div className="relative z-10 px-16 max-w-[55%]">
          <div
            className="mb-10 animate-clip-reveal [animation-fill-mode:both]"
            style={{ animationDelay: "0.8s", clipPath: "inset(0 100% 0 0)" }}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm tracking-[0.3em] uppercase text-muted-foreground">
              <span>Cível</span>
              <span className="text-foreground/30">•</span>
              <span>Consumidor</span>
              <span className="text-foreground/30">•</span>
              <span>Previdenciário</span>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-editorial-xl text-foreground leading-[0.9]">
              <span className="block overflow-visible py-6" style={{ perspective: "800px" }}>
                <AnimatedLetters text="Jonatham" className="text-foreground" baseDelay={1.0} />
              </span>
              <span className="block ml-[10vw] overflow-visible py-6" style={{ perspective: "800px" }}>
                <AnimatedLetters text="Moraes" className="text-cream" baseDelay={1.8} />
              </span>
            </h1>
          </div>

          <div
            className="mt-12 max-w-md animate-fade-up opacity-0 [animation-fill-mode:both]"
            style={{ animationDelay: "2.6s" }}>
            <p className="text-base tracking-wide text-muted-foreground leading-relaxed">
              Advocacia e Consultoria Jurídica
            </p>
            <p className="mt-1 text-xs tracking-widest text-muted-foreground/60">OAB/CE 54.863</p>
          </div>

          <div
            className="mt-14 h-px bg-foreground/20 origin-left animate-line-expand [animation-fill-mode:both]"
            style={{ animationDelay: "3.0s", maxWidth: "200px" }} />
          
          <div className="mt-10">
            <a
              href={`https://wa.me/5585999999999?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors"
              aria-label="Agendar consulta pelo WhatsApp"
            >
              Agende uma consulta
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-16 animate-fade-in opacity-0 [animation-fill-mode:both]"
          style={{ animationDelay: "3.3s" }}>
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-foreground/20" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-muted-foreground">
              DESÇA PARA CONHECER
            </span>
            <ChevronsDown className="w-5 h-5 text-cream animate-bounce" />
          </div>
        </div>
      </div>
    </section>);

};
