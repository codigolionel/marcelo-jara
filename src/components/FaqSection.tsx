import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta un seguro de vida?",
    answer: "Depende de la edad, el capital asegurado y la duración. En 10 minutos te armo una comparativa real entre las aseguradoras con las que trabajo.",
  },
  {
    question: "¿Cuál es la diferencia entre todo riesgo y terceros completo?",
    answer: "Terceros completo cubre daños a otros más granizo, cristales, robo e incendio de tu auto. Todo riesgo suma los daños propios — si chocás vos, también te cubre. Te ayudo a elegir según el valor del auto y tu presupuesto.",
  },
  {
    question: "¿Qué pasa si dejo de pagar una cuota?",
    answer: "La mayoría de las aseguradoras dan 30 días de gracia antes de suspender la cobertura. Avisame y vemos cómo regularizarlo sin perder la póliza.",
  },
  {
    question: "¿Cómo denuncio un siniestro? ¿Te llamo a vos o a la aseguradora?",
    answer: "A mí primero. Me escribís por WhatsApp, me contás qué pasó, y yo hago la denuncia y sigo el caso con la aseguradora hasta que te resuelvan.",
  },
  {
    question: "¿Cobrás comisión del cliente? ¿Por qué me conviene vs contratar directo?",
    answer: "No te cobro nada. La comisión la paga la aseguradora. La diferencia es que si contratás directo, en un siniestro estás solo. Conmigo tenés a alguien que conoce el sistema y te acompaña.",
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
