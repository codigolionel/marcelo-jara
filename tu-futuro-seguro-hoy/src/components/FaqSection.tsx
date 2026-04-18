import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo sé qué cobertura necesito?",
    answer: "En una primera consulta sin compromiso, analizamos tu situación personal o empresarial para identificar las coberturas que realmente necesitás. Te explico cada opción con claridad para que tomes la mejor decisión.",
  },
  {
    question: "¿Ofrecen comparación entre aseguradoras?",
    answer: "Sí, trabajo con múltiples compañías del mercado para ofrecerte las mejores opciones en precio y cobertura. Mi objetivo es que elijas con toda la información disponible.",
  },
  {
    question: "¿Cómo se gestiona un siniestro?",
    answer: "Te acompaño en todo el proceso de gestión del siniestro. Desde la denuncia inicial hasta la resolución, estoy disponible para orientarte y asegurar que recibas la prestación que te corresponde.",
  },
  {
    question: "¿Están mis datos personales protegidos?",
    answer: "Absolutamente. Toda la información que compartís conmigo es tratada con total confidencialidad y bajo las normativas de protección de datos vigentes.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="pt-24 pb-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label inline-block mb-6 text-gold"
          >
            Preguntas Frecuentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl md:text-5xl text-foreground tracking-tight leading-tight"
          >
            Preguntas <em className="italic text-gold">frecuentes</em>
          </motion.h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-heading text-lg hover:no-underline hover:text-gold transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
