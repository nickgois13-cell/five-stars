import { Instagram, Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="font-heading text-xl font-bold text-cream">Five Stars</span>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Especialistas em trufas e brownies artesanais. Delícias feitas para momentos especiais.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Produtos
            </h4>
            <ul className="space-y-2 font-body text-sm text-cream/60">
              <li><a href="#cardapio" className="hover:text-gold transition-colors">Brownie Clássico</a></li>
              <li><a href="#cardapio" className="hover:text-gold transition-colors">Brownie de Brigadeiro</a></li>
              <li><a href="#cardapio" className="hover:text-gold transition-colors">Brownie de Ninho</a></li>
              <li><a href="#cardapio" className="hover:text-gold transition-colors">Trufas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 font-body text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="https://wa.me/5514991447877" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  (14) 99144-7877
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:nick.gois13@gmail.com" className="hover:text-gold transition-colors">
                  nick.gois13@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Agudos, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-cream/10">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Five Stars Brownies & Trufas. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5514991447877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors duration-300 font-body text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
