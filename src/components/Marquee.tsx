import { useEffect, useRef } from "react";

const items = [
  "Direito Civil",
  "Direito do Consumidor", 
  "Direito Previdenciário",
  "Contratos",
  "Família & Sucessões",
  "INSS & Aposentadoria",
];

export const Marquee = () => {
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    let cleanup: (() => void) | null = null;

    const selectTrack = () => {
      const mobile = mobileTrackRef.current;
      const desktop = desktopTrackRef.current;
      if (window.innerWidth < 1024) return mobile;
      return desktop && desktop.offsetWidth > 0 ? desktop : null;
    };

    const start = () => {
      const track = selectTrack();
      if (!track) return;
      let x = 0;
      const speed = window.innerWidth < 1024 ? 0.15 : 0.5;
      const animate = () => {
        x -= speed;
        const halfWidth = track.scrollWidth / 2 || 1;
        if (Math.abs(x) >= halfWidth) x += halfWidth;
        track.style.transform = `translateX(${x}px)`;
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      cleanup = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = null;
      };
    };

    start();
    const onResize = () => {
      if (cleanup) cleanup();
      start();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (cleanup) cleanup();
    };
  }, []);

  const separator = <span className="mx-3 lg:mx-10 text-cream/30 text-base lg:text-3xl select-none">◆</span>;

  const desktopContent = items.map((item, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="font-display text-xl lg:text-5xl xl:text-6xl text-foreground/10 whitespace-nowrap tracking-tight italic">
        {item}
      </span>
      {separator}
    </span>
  ));

  const mobileContent = items.map((item, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="inline-flex items-center px-4 py-2 rounded-full border border-foreground/10 bg-card/30 text-xs tracking-[0.25em] uppercase text-muted-foreground whitespace-nowrap">
        {item}
      </span>
      <span className="mx-3 text-foreground/10">•</span>
    </span>
  ));

  return (
    <>
      <div className="relative py-6 overflow-hidden lg:hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        <div ref={mobileTrackRef} className="flex items-center w-max will-change-transform px-8">
          {mobileContent}
          {mobileContent}
        </div>
      </div>
      <div className="relative py-4 lg:py-12 overflow-hidden select-none hidden lg:block" aria-hidden="true">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        <div ref={desktopTrackRef} className="flex items-center w-max will-change-transform">
          {desktopContent}
          {desktopContent}
        </div>
      </div>
    </>
  );
};
