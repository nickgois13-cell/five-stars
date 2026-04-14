import { Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="font-heading text-xl font-bold text-cream">Five Stars</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors duration-300 font-body text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/10 text-center">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Five Stars Brownies. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
