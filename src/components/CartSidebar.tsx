import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { CartItem } from "@/hooks/useCart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartSidebar = ({ isOpen, onClose, items, total, onUpdateQuantity, onRemove }: CartSidebarProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <h2 className="font-heading text-xl font-bold text-foreground">Seu Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
              <p className="font-body">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-xl bg-secondary/50 animate-scale-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-semibold text-sm text-foreground truncate">
                    {item.name}
                  </h4>
                  <p className="text-primary font-heading font-bold text-sm">
                    R${item.price.toFixed(2).replace(".", ",")}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="self-start text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-muted-foreground">Total</span>
              <span className="font-heading text-2xl font-bold text-foreground">
                R${total.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <button className="w-full btn-primary-custom justify-center">
              Finalizar Compra
            </button>
            <p className="text-center text-xs text-muted-foreground font-body">
              Aceitamos Pix, cartão de crédito e débito
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
