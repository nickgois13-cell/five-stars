import heroImage from "@/assets/hero-brownies.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brownies artesanais Five Stars"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-chocolate-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/90 via-transparent to-chocolate-dark/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <p
            className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            ★ Brownies Artesanais Premium
          </p>

          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Os melhores brownies da sua vida, em cada mordida.
          </h1>

          <p
            className="text-cream-dark/90 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Feitos com chocolate belga, ingredientes selecionados e muito amor.
            Uma experiência que vai além do sabor.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#cardapio" className="btn-primary-custom bg-gold text-chocolate-dark hover:bg-gold/90">
              Comprar agora
            </a>
            <a href="#cardapio" className="btn-outline-custom border-cream/40 text-cream hover:bg-cream/10 hover:text-cream">
              Ver cardápio
            </a>
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
