import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-brownies.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brownies e trufas artesanais Five Stars"
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradiente controlado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

        {/* Glow central (efeito premium) */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(255,140,0,0.25) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          
          <p className="font-cursive text-gold text-2xl md:text-3xl mb-4">
            ★ Five Stars
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
            Os melhores brownies e trufas da sua vida.
          </h1>

          <p className="text-cream-dark/90 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-xl">
            Feitos artesanalmente com ingredientes selecionados para momentos inesquecíveis.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4">

            {/* 🔥 BOTÃO WHATSAPP */}
            <a
              href="https://wa.me/5514991447877?text=Oi!%20Quero%20pedir%20brownies%20da%20Five%20Stars"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-chocolate-dark px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gold/90"
            >
              Comprar agora
            </a>

            {/* Botão secundário */}
            <a
              href="#cardapio"
              className="border border-cream/40 text-cream px-6 py-3 rounded-xl hover:bg-cream/10 transition"
            >
              Ver cardápio
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-6 mt-12">
            {["100% Artesanal", "Ingredientes Premium", "Entrega Rápida"].map((badge) => (
              <span key={badge} className="text-cream/60 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-cream/50 animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
