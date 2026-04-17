import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import SectionDivider from "@/components/SectionDivider";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { items, isOpen, setIsOpen, addItem, removeItem, updateQuantity, total, count } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar cartCount={count} onCartClick={() => setIsOpen(true)} />
      <HeroSection />
      {/* Hero (#3e2723-ish) → Produtos (#f5e6d3) */}
      <SectionDivider from="#3e2723" to="#f5e6d3" />
      <ProductsSection onAddToCart={addItem} />
      {/* Produtos (#f5e6d3) → Diferenciais (chocolate gradient) */}
      <SectionDivider from="#f5e6d3" to="#3e2723" />
      <DifferentialsSection />
      {/* Diferenciais (#3e2723) → Avaliações (#f9f5e6) */}
      <SectionDivider from="#3e2723" to="#f9f5e6" />
      <ReviewsSection />
      {/* Avaliações (#f9f5e6) → Sobre (#5d4037) */}
      <SectionDivider from="#f9f5e6" to="#5d4037" />
      <AboutSection />
      {/* Sobre (#5d4037) → FAQ (#f5e6d3) */}
      <SectionDivider from="#5d4037" to="#f5e6d3" />
      <FAQSection />
      {/* FAQ (#f5e6d3) → Footer (dark) */}
      <SectionDivider from="#f5e6d3" to="#3e2723" />
      <Footer />
      <CartSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />

      {count > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 btn-primary-custom shadow-2xl gap-2 animate-scale-in"
        >
          Finalizar Compra ({count})
        </button>
      )}
    </div>
  );
};

export default Index;
