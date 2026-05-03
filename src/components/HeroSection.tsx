import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-brownies.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setVisible(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    const handleScroll = () => {
      if (!reduceMotion) setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [reduceMotion]);

  const fadeBase = "transition-all duration-700 ease-out";
  const show = "opacity-100 translate-y-0";
  const hide = "opacity-0 translate-y-6";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brownies e trufas artesanais Five Stars"
          loading="eager"
          fetchPriority="high"
          className={`w-full h-full object-cover ${fadeBase} ${visible ? show : hide}`}
          style={{
            transform: reduceMotion ? "none" : `translateY(${scrollY * 0.2}px) scale(1.08)`,
          }}
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        <div
          className={`absolute pointer-events-none ${fadeBase} ${visible ? "opacity-100" : "opacity-0"}`}
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

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <p
            className={`${fadeBase} delay-100 ${visible ? show : hide} font-cursive text-gold text-2xl md:text-3xl mb-4`}
          >
            ★ Five Stars
          </p>

          <h1
            className={`${fadeBase} delay-200 ${visible ? show : hide} font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)]`}
          >
            Os melhores brownies e trufas da sua vida.
          </h1>

          <p
            className={`${fadeBase} delay-300 ${visible ? show : hide} text-cream-dark/90 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-xl`}
          >
            Feitos artesanalmente com ingredientes selecionados para momentos inesquecíveis.
          </p>

          <div className={`${fadeBase} delay-400 flex flex-wrap gap-4 ${visible ? show : hide}`}>
            <a
              href="https://wa.me/5514991447877?text=Oi!%20Quero%20pedir%20brownies%20da%20Five%20Stars"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-chocolate-dark px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Comprar agora
            </a>

            <a
              href="#cardapio"
              className="border border-cream/40 text-cream px-6 py-3 rounded-xl hover:bg-cream/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/60"
            >
              Ver cardápio
            </a>
          </div>

          <div className={`${fadeBase} delay-500 flex flex-wrap gap-6 mt-12 ${visible ? show : hide}`}>
            {["100% Artesanal", "Ingredientes Premium", "Entrega Rápida"].map((badge) => (
              <span key={badge} className="text-cream/60 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
