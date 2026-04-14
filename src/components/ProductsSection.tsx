import { Plus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { CartItem } from "@/hooks/useCart";

import brownieClassico from "@/assets/brownie-classico.jpg";
import brownieBrigadeiro from "@/assets/brownie-brigadeiro.jpg";
import brownieNinho from "@/assets/brownie-ninho.jpg";
import brownieNinhoNutella from "@/assets/brownie-ninho-nutella.jpg";

const products = [
  {
    id: "classico",
    name: "Brownie Clássico",
    price: 3.5,
    description: "Chocolate intenso com textura perfeita — crocante por fora, molhadinho por dentro.",
    image: brownieClassico,
  },
  {
    id: "brigadeiro",
    name: "Brownie de Brigadeiro",
    price: 4.0,
    description: "A combinação perfeita do brownie com o sabor irresistível do brigadeiro brasileiro.",
    image: brownieBrigadeiro,
  },
  {
    id: "ninho",
    name: "Brownie de Ninho",
    price: 4.5,
    description: "Cobertura cremosa de leite ninho sobre o nosso brownie artesanal — pura indulgência.",
    image: brownieNinho,
  },
  {
    id: "ninho-nutella",
    name: "Brownie Ninho c/ Nutella",
    price: 5.5,
    description: "O encontro perfeito: creme de ninho, Nutella e brownie de chocolate belga.",
    image: brownieNinhoNutella,
  },
];

interface ProductsSectionProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const sectionRef = useScrollReveal();

  return (
    <section id="cardapio" className="py-24 bg-cream-gradient">
      <div ref={sectionRef} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-3">
            Nosso Cardápio
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Escolha o seu favorito
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift border border-border/50"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chocolate-dark/0 group-hover:bg-chocolate-dark/20 transition-colors duration-500" />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-primary">
                    R${product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
