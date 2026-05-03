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
      <SectionDivider from="#3e2723" to="#f5e6d3" />
      <ProductsSection onAddToCart={addItem} />
      <SectionDivider from="#f5e6d3" to="#3e2723" />
      <DifferentialsSection />
      <SectionDivider from="#3e2723" to="#f5e6d3" />
      <ReviewsSection />
      <SectionDivider from="#f5e6d3" to="#3e2723" />
      <AboutSection />
      <SectionDivider from="#3e2723" to="#f5e6d3" />
      <FAQSection />
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
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[70] rounded-full bg-primary px-5 py-3 text-white shadow-2xl"
        >
          Finalizar Compra ({count})
        </button>
      )}
    </div>
  );
};

export default Index;
