import { ChefHat, Leaf, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: ChefHat,
    title: "Feito Artesanalmente",
    description: "Cada brownie é preparado à mão com técnicas tradicionais e muito carinho.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Selecionados",
    description: "Utilizamos chocolate belga, manteiga de qualidade e ingredientes premium.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba seus brownies fresquinhos no conforto da sua casa com agilidade.",
  },
];

const DifferentialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-chocolate-gradient">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-body mb-3">
            Nossos Diferenciais
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream">
            Por que Five Stars?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur-sm hover:bg-cream/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-cream mb-3">
                {item.title}
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
