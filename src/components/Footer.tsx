import { Instagram, Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2a1a17] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="font-heading text-xl font-bold text-cream">
                Five Stars
              </span>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Especialistas em trufas e brownies artesanais. Delícias feitas para momentos especiais.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Produtos
            </h4>
            <ul className="space-y-2 font-body text-sm text-cream/60">
              <li>
                <a href="/?categoria=brownies#cardapio" className="hover:text-gold transition-colors">
                  Brownies
                </a>
              </li>
              <li>
                <a href="/?categoria=trufas#cardapio" className="hover:text-gold transition-colors">
                  Trufas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 font-body text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href="https://wa.me/5514991447877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  (14) 99144-7877
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a
                  href="mailto:nick.gois13@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  nick.gois13@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-gold" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
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
            © {new Date().getFullYear()} Five Stars. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
