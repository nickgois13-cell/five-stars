import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Star } from "lucide-react";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-cream-gradient">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cursive text-gold text-2xl mb-2">Nossa História</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sobre a Five Stars
          </h2>
          
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            A Five Stars nasceu da paixão por chocolate e do desejo de criar doces que 
            proporcionem momentos inesquecíveis. Cada receita é desenvolvida com carinho, 
            testada dezenas de vezes até atingir o equilíbrio ideal entre textura, sabor e qualidade.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Utilizamos apenas ingredientes premium — chocolate belga, manteiga de primeira e 
            cacau de origem controlada. Nosso compromisso é entregar não apenas um doce, 
            mas uma experiência cinco estrelas em cada mordida.
          </p>

          <div className="inline-flex items-center gap-2 text-primary font-body font-medium">
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <span>Feito com amor em Agudos, SP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
