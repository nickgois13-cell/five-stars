import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { CartItem } from "@/hooks/useCart";

import brownieClassico from "@/assets/brownie-classico.jpg";
import brownieBrigadeiro from "@/assets/brownie-brigadeiro.jpg";
import brownieNinho from "@/assets/brownie-ninho.jpg";
import brownieNinhoNutella from "@/assets/brownie-ninho-nutella.jpg";
import trufaSimples from "@/assets/trufa-simples.jpg";
import trufaNinho from "@/assets/trufa-ninho.jpg";
import trufaNinhoNutella from "@/assets/trufa-ninho-nutella.jpg";

type Category = "todos" | "brownies" | "trufas";

const products = [
  {
    id: "classico",
    name: "Brownie Clássico",
    price: 3.5,
    description: "Chocolate intenso com textura perfeita — crocante por fora, molhadinho por dentro.",
    image: brownieClassico,
    category: "brownies" as const,
  },
  {
    id: "brigadeiro",
    name: "Brownie de Brigadeiro",
    price: 4.0,
    description: "A combinação perfeita do brownie com o sabor irresistível do brigadeiro brasileiro.",
    image: brownieBrigadeiro,
    category: "brownies" as const,
  },
  {
    id: "ninho",
    name: "Brownie de Ninho",
    price: 4.5,
    description: "Cobertura cremosa de leite ninho sobre o nosso brownie artesanal — pura indulgência.",
    image: brownieNinho,
    category: "brownies" as const,
  },
  {
    id: "ninho-nutella",
    name: "Brownie Ninho c/ Nutella",
    price: 5.5,
    description: "O encontro perfeito: creme de ninho, Nutella e brownie de chocolate belga.",
    image: brownieNinhoNutella,
    category: "brownies" as const,
  },
  {
    id: "trufa-simples",
    name: "Trufa Simples",
    price: 3.5,
    description: "Trufa clássica de chocolate — cremosa, intensa e irresistível.",
    image: trufaSimples,
    category: "trufas" as const,
  },
  {
    id: "trufa-ninho",
    name: "Trufa de Ninho",
    price: 4.5,
    description: "Trufa coberta com leite ninho — doçura cremosa que derrete na boca.",
    image: trufaNinho,
    category: "trufas" as const,
  },
  {
    id: "trufa-ninho-nutella",
    name: "Trufa Ninho c/ Nutella",
    price: 5.5,
    description: "Trufa com recheio de Nutella e cobertura de ninho — combinação premium.",
    image: trufaNinhoNutella,
    category: "trufas" as const,
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "brownies", label: "Brownies" },
  { key: "trufas", label: "Trufas" },
];

interface ProductsSectionProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const filtered = activeCategory === "todos" ? products : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: typeof products[0]) => {
    onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => setAddedIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    }), 1200);
  };

  return (
    <section id="cardapio" className="py-24 bg-cream-gradient">
      <div ref={sectionRef} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-12">
          <p className="font-cursive text-gold text-2xl mb-2">Nosso Cardápio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Escolha o seu favorito
          </h2>

          {/* Category tabs */}
          <div className="flex justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift border border-border/50 transition-all duration-500"
              style={{ animationDelay: `${i * 0.08}s` }}
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
                {/* Quick add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-chocolate-dark/80 to-transparent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <button
                    onClick={() => handleAdd(product)}
                    className="w-full py-2.5 rounded-full bg-gold text-chocolate-dark font-semibold text-sm transition-all hover:bg-gold/90"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
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
                    onClick={() => handleAdd(product)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
                      addedIds.has(product.id)
                        ? "bg-green-600 text-primary-foreground"
                        : "bg-primary text-primary-foreground hover:shadow-lg"
                    }`}
                  >
                    {addedIds.has(product.id) ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
