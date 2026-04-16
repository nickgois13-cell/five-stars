import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Maria S.", rating: 5, text: "Melhor brownie que já comi na vida! Textura perfeita e sabor incrível." },
  { name: "João P.", rating: 5, text: "O de ninho com Nutella é simplesmente divino. Já pedi 3 vezes!" },
  { name: "Ana L.", rating: 5, text: "Presenteei minha mãe e ela amou. Qualidade premium de verdade!" },
  { name: "Carlos M.", rating: 5, text: "Viciante demais! Impossível comer só um. Entrega super rápida." },
  { name: "Beatriz R.", rating: 5, text: "As trufas são sensacionais! Derretem na boca. Super recomendo." },
  { name: "Lucas F.", rating: 4, text: "Brownie clássico sensacional. Embalagem linda, perfeito pra presente." },
];

const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

const ReviewsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="avaliacoes" className="py-24">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-16">
          <p className="font-cursive text-gold text-2xl mb-2">Avaliações</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que dizem nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-3 bg-card p-4 rounded-2xl inline-flex border border-border/50">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">{avg}</span>
            <span className="text-muted-foreground text-sm font-body">/ 5 ({reviews.length} avaliações)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-2xl border border-border/50 hover-lift group relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-4 right-4 group-hover:text-gold/40 transition-colors duration-500" />
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
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{r.name.charAt(0)}</span>
                </div>
                <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {r.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
