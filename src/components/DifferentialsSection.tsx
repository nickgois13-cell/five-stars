import { ChefHat, Leaf, Truck, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    icon: Leaf,
    title: "Ingredientes Selecionados",
    description: "Chocolate belga, manteiga de qualidade e ingredientes premium em cada receita.",
  },
  {
    icon: ChefHat,
    title: "Produção Artesanal",
    description: "Cada doce é preparado à mão com técnicas tradicionais e muito carinho.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba seus doces fresquinhos no conforto da sua casa com agilidade.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Compromisso com a excelência em cada detalhe, do preparo à embalagem.",
  },
];

const DifferentialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-chocolate-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="container mx-auto px-4 section-reveal relative z-10">
        <div className="text-center mb-16">
          <p className="font-cursive text-gold text-2xl mb-2">Nossos Diferenciais</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream">
            Por que Five Stars?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur-sm hover:bg-cream/10 hover:border-gold/20 transition-all duration-500 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-cream mb-3">
                {item.title}
              </h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
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
