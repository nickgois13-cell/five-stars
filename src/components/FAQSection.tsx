import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como faço um pedido?",
    a: "Basta adicionar os produtos ao carrinho e finalizar a compra. Você será direcionado para o WhatsApp para confirmar seu pedido.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos Pix, cartão de crédito e débito. O pagamento é feito na entrega ou via transferência.",
  },
  {
    q: "Vocês fazem entregas?",
    a: "Sim! Fazemos entregas em Agudos e região. Consulte disponibilidade e taxa pelo WhatsApp.",
  },
  {
    q: "Os brownies e trufas são feitos na hora?",
    a: "Sim, todos os nossos produtos são feitos artesanalmente sob encomenda, garantindo máxima frescura e qualidade.",
  },
  {
    q: "Posso encomendar para eventos e festas?",
    a: "Com certeza! Fazemos encomendas personalizadas para qualquer ocasião. Entre em contato para combinar quantidades e prazos.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-24">
      <div ref={ref} className="container mx-auto px-4 section-reveal">
        <div className="text-center mb-12">
          <p className="font-cursive text-gold text-2xl mb-2">Dúvidas</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/50 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
