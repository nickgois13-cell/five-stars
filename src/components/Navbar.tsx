import { ShoppingBag, Star } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Star className="w-5 h-5 text-gold fill-gold transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">
            Five Stars
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Início", "Cardápio", "Sobre", "Avaliações"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onCartClick}
          className="relative p-2 rounded-full hover:bg-secondary transition-colors duration-300"
        >
          <ShoppingBag className="w-5 h-5 text-foreground" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold animate-cart-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
