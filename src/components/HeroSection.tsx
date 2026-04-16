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
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brownies e trufas artesanais Five Stars"
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-chocolate-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/95 via-chocolate-dark/30 to-chocolate-dark/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <p
            className="font-cursive text-gold text-2xl md:text-3xl mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            ★ Five Stars
          </p>

          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Os melhores brownies e trufas da sua vida.
          </h1>

          <p
            className="text-cream-dark/90 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Feitos artesanalmente com ingredientes selecionados para momentos inesquecíveis.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#cardapio" className="btn-primary-custom bg-gold text-chocolate-dark hover:bg-gold/90 animate-pulse-glow">
              Comprar agora
            </a>
            <a href="#cardapio" className="btn-outline-custom border-cream/40 text-cream hover:bg-cream/10 hover:text-cream">
              Ver cardápio
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            {["100% Artesanal", "Ingredientes Premium", "Entrega Rápida"].map((badge) => (
              <span key={badge} className="text-cream/60 text-xs uppercase tracking-widest font-body flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-cream/50 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
