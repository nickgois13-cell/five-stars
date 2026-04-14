import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { items, isOpen, setIsOpen, addItem, removeItem, updateQuantity, total, count } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar cartCount={count} onCartClick={() => setIsOpen(true)} />
      <HeroSection />
      <ProductsSection onAddToCart={addItem} />
      <DifferentialsSection />
      <ReviewsSection />
      <AboutSection />
      <Footer />
      <CartSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />

      {/* Fixed cart button */}
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
