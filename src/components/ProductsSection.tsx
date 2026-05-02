import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { CartItem } from "@/hooks/useCart";

import brownieNinho from "@/assets/brownie-ninho.jpg";
import brownieNinhoNutella from "@/assets/brownie-ninho-nutella.jpg";

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
    image: "https://i.postimg.cc/3JJgBPqv/Trufa-Tradicional.jpg",
    category: "trufas",
  },
  {
    id: "trufa-ninho",
    name: "Trufa de Ninho",
    price: 14,
    description: "Trufa coberta com leite ninho — doçura cremosa que derrete na boca.",
    image: "https://i.postimg.cc/yYYFPwGF/Trufa-Leite-Ninho.jpg",
    category: "trufas",
  },
  {
    id: "trufa-ninho-nutella",
    name: "Trufa Ninho c/ Nutella",
    price: 15,
    description: "Trufa com recheio de Nutella e cobertura de ninho — combinação premium.",
    image: "https://i.postimg.cc/SsBp2YDz/Trufa-Ninho-Nutella.jpg",
    category: "trufas",
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

    if (category === "todos") {
      searchParams.delete("categoria");
      setSearchParams(searchParams, { replace: true });
      return;
    }

    setSearchParams({ categoria: category }, { replace: true });
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
  onClick={() => handleAdd(product)}
  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
    added
      ? "bg-green-600 text-white"
      : "bg-primary text-primary-foreground hover:shadow-lg"
  }`}
>
  {added ? "Adicionado" : "Quero esse"}
</button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => {
            const added = addedIds.has(product.id);

            return (
              <div
                key={product.id}
                className="group bg-[#fff8f0] rounded-2xl overflow-hidden shadow-[0_4px_20px_-8px_rgba(62,39,35,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(62,39,35,0.25)] border border-[#e9d9c0] transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/2] bg-[#f5e6d3]">
                  {"badge" in product && product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-gold text-chocolate-dark text-xs px-3 py-1 rounded-full font-semibold shadow-md">
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

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-chocolate-dark/80 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
  onClick={() => handleAdd(product)}
  aria-label={`Adicionar ${product.name} ao carrinho`}
  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
    added
      ? "bg-green-600 text-primary-foreground"
      : "bg-primary text-primary-foreground hover:shadow-lg hover:scale-[1.02]"
  }`}
>
  {added ? "Adicionado" : "Quero esse"}
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
                      aria-label={`Adicionar ${product.name} ao carrinho`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        added
                          ? "bg-green-600 text-primary-foreground"
                          : "bg-primary text-primary-foreground hover:shadow-lg"
                      }`}
                    >
                      {added ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
