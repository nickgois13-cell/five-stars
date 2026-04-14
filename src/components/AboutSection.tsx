import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-cream-gradient">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-3">
            Nossa História
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sobre a Five Stars
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            A Five Stars nasceu da paixão por chocolate e do desejo de criar o brownie perfeito.
            Cada receita é desenvolvida com carinho, testada dezenas de vezes até atingir o
            equilíbrio ideal entre textura, sabor e qualidade.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Utilizamos apenas ingredientes premium — chocolate belga, manteiga de primeira e
            cacau de origem controlada. Nosso compromisso é entregar não apenas um brownie,
            mas uma experiência cinco estrelas em cada mordida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
