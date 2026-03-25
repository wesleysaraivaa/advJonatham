import { useState, useCallback } from "react";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AreasAtuacao } from "@/components/AreasAtuacao";
import { Diferenciais } from "@/components/Diferenciais";
import { Contato } from "@/components/Contato";
import { Navigation } from "@/components/Navigation";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <GrainOverlay />
      <main className="relative bg-background text-foreground">
        <Navigation />
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <Marquee />
        <Diferenciais />
        <Contato />
        <Footer />
      </main>
    </>
  );
};

export default Index;
