import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Maria S.", rating: 5, text: "Melhor brownie que já comi na vida! Textura perfeita e sabor incrível." },
  { name: "João P.", rating: 5, text: "O de ninho com Nutella é simplesmente divino. Já pedi 3 vezes!" },
  { name: "Ana L.", rating: 5, text: "Presenteei minha mãe e ela amou. Qualidade premium de verdade!" },
  { name: "Carlos M.", rating: 4, text: "Brownie clássico sensacional. Entrega rápida e embalagem linda." },
];

const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

const ReviewsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="avaliacoes" className="py-24">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-3">
            Avaliações
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-heading text-xl font-bold text-foreground">{avg}</span>
            <span className="text-muted-foreground text-sm font-body">({reviews.length} avaliações)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-2xl border border-border/50 hover-lift"
            >
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s < r.rating ? "text-gold fill-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed mb-4">
                "{r.text}"
              </p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
