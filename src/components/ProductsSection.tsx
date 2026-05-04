import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { CartItem } from "@/hooks/useCart";

import brownieNinho from "@/assets/brownie-ninho.jpg";
import brownieNinhoNutella from "@/assets/brownie-ninho-nutella.jpg";
import trufaSimples from "@/assets/trufa-simples.jpg";
import trufaNinho from "@/assets/trufa-ninho.jpg";
import trufaNinhoNutella from "@/assets/trufa-ninho-nutella.jpg";

type Category = "todos" | "brownies" | "trufas";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Exclude<Category, "todos">;
  badge?: string;
};

const products: Product[] = [
  {
    id: "classico",
    name: "Brownie Clássico",
    price: 7.5,
    description: "Chocolate intenso com textura perfeita — crocante por fora, molhadinho por dentro.",
    image: "https://i.postimg.cc/bNNQTK5k/Brownie-Tradicional.webp",
    category: "brownies",
  },
  {
    id: "brigadeiro",
    name: "Brownie de Brigadeiro",
    price: 12,
    description: "A combinação perfeita do brownie com o sabor irresistível do brigadeiro brasileiro.",
    image: "https://i.postimg.cc/8PPhHqYf/Brownie-Brigadeiro.jpg",
    category: "brownies",
  },
  {
    id: "ninho",
    name: "Brownie de Ninho",
    price: 14,
    description: "Cobertura cremosa de leite ninho sobre o nosso brownie artesanal — pura indulgência.",
    image: brownieNinho,
    category: "brownies",
  },
  {
    id: "ninho-nutella",
    name: "Brownie Ninho c/ Nutella",
    price: 15,
    description: "O encontro perfeito: creme de ninho, Nutella e brownie de chocolate.",
    image: brownieNinhoNutella,
    category: "brownies",
    badge: "Mais vendido",
  },
  {
    id: "trufa-simples",
    name: "Trufa Simples",
    price: 7.5,
    description: "Trufa clássica de chocolate — cremosa, intensa e irresistível.",
    image: trufaSimples,
    category: "trufas",
    badge: "Fora de estoque",
  },
  {
    id: "trufa-ninho",
    name: "Trufa de Ninho",
    price: 14,
    description: "Trufa coberta com leite ninho — doçura cremosa que derrete na boca.",
    image: trufaNinho,
    category: "trufas",
    badge: "Fora de estoque",
  },
  {
    id: "trufa-ninho-nutella",
    name: "Trufa Ninho c/ Nutella",
    price: 15,
    description: "Trufa com recheio de Nutella e cobertura de ninho — combinação premium.",
    image: trufaNinhoNutella,
    category: "trufas",
    badge: "Fora de estoque",
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const category = searchParams.get("categoria");

    if (category === "todos" || category === "brownies" || category === "trufas") {
      setActiveCategory(category);
    } else {
      setActiveCategory("todos");
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);

    const params = new URLSearchParams(searchParams);

    if (category === "todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", category);
    }

    setSearchParams(params, { replace: true });
  };

  const handleAdd = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setAddedIds((prev) => {
      const next = new Set(prev);
      next.add(product.id);
      return next;
    });

    window.setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1200);
  };

  return (
    <section id="cardapio" className="py-24 bg-[#f5e6d3]">
      <div ref={sectionRef} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-12">
          <p className="font-cursive text-gold text-2xl mb-2">Nosso Cardápio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Escolha o seu favorito
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => {
            const added = addedIds.has(product.id);
            const outOfStock = product.badge === "Fora de estoque";

            return (
              <div
                key={product.id}
                className={`group bg-[#fff8f0] rounded-2xl overflow-hidden shadow-[0_4px_20px_-8px_rgba(62,39,35,0.15)] border border-[#e9d9c0] transition-all duration-500 ${
                  outOfStock
                    ? "opacity-60 grayscale-[20%]"
                    : "hover:shadow-[0_20px_40px_-12px_rgba(62,39,35,0.25)] hover:-translate-y-1"
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/2] bg-[#f5e6d3]">
                  {"badge" in product && product.badge && (
                    <span
                      className={`absolute top-3 left-3 z-10 text-xs px-3 py-1 rounded-full font-semibold shadow-md ${
                        product.badge === "Fora de estoque"
                          ? "bg-red-600 text-white"
                          : "bg-gold text-chocolate-dark"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-chocolate-dark/0 group-hover:bg-chocolate-dark/20 transition-colors duration-500" />

                  <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-chocolate-dark/80 to-transparent transition-all duration-300 ${outOfStock ? "opacity-0 pointer-events-none" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}>
                    <button
                      onClick={() => !outOfStock && handleAdd(product)}
                      disabled={outOfStock}
                      aria-disabled={outOfStock}
                      className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        outOfStock
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : added
                          ? "bg-green-600 text-white"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {outOfStock ? "Indisponível" : added ? "Adicionado" : "Quero esse"}
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

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-heading text-2xl font-bold text-primary">
                      R${product.price.toFixed(2).replace(".", ",")}
                    </span>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        added
                          ? "bg-green-600 text-white"
                          : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg"
                      }`}
                    >
                      {added ? "Adicionado" : "Quero esse"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
