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
    a: "O pagamento é feito na entrega ou via WhatsApp.",
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
    <section id="faq" className="py-24 bg-[#f5e6d3]">
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
  className="rounded-2xl overflow-hidden border border-[#e9d9c0] bg-[#fff8f0] shadow-[0_4px_20px_-8px_rgba(62,39,35,0.1)] hover:shadow-[0_12px_30px_-10px_rgba(224,123,31,0.3)] hover:border-[#e07b1f] hover:bg-[#fdf0e0] transition-all duration-300 ease-out"
>
  <AccordionTrigger className="bg-transparent font-heading font-semibold text-[#3e2723] text-left hover:no-underline hover:text-[#e07b1f] active:text-[#b85a14] active:scale-[0.99] transition-all duration-300 ease-out py-5 px-6 [&[data-state=open]]:text-[#e07b1f]">
    {faq.q}
  </AccordionTrigger>

  <AccordionContent className="bg-transparent font-body text-[#5d4037] leading-relaxed pb-5 px-6">
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
