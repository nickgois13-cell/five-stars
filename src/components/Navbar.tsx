import { useState, useEffect } from "react";
import { ShoppingBag, Star, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const navItems = ["Início", "Cardápio", "Sobre", "Avaliações", "FAQ"];

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "backdrop-blur-md bg-background/90 border-b border-border/50 shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Star className="w-5 h-5 text-gold fill-gold transition-transform duration-300 group-hover:rotate-12" />
          <span className={`font-heading text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-cream"}`}>
            Five Stars
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-cream/80 hover:text-cream"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-secondary/50 transition-colors duration-300"
          >
            <ShoppingBag className={`w-5 h-5 transition-colors ${scrolled ? "text-foreground" : "text-cream"}`} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-chocolate-dark text-xs flex items-center justify-center font-semibold animate-cart-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary/50 transition-colors"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-cream"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-cream"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground py-2 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
