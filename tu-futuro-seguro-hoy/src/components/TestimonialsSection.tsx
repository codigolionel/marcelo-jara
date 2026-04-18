import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cliente particular",
    role: "Buenos Aires",
    text: "Marcelo me ayudó a entender qué necesitaba de verdad, sin venderme de más. Hoy tengo la tranquilidad de saber que mi familia está protegida.",
    stars: 5,
    initials: "CP",
  },
  {
    name: "Titular de PyME",
    role: "CABA",
    text: "Tercerizamos todo el manejo de la ART y los seguros de nuestra flota logística. La respuesta rápida ante siniestros y el acompañamiento constante aportaron enorme valor a nuestra empresa.",
    stars: 5,
    initials: "TP",
  },
  {
    name: "Dueño de comercio",
    role: "Gran Buenos Aires",
    text: "Tuve un imprevisto importante en mi local. Gracias a la cobertura integral que planificamos en base a sus consejos, pude resolver todo rápidamente sin sufrir graves pérdidas económicas.",
    stars: 5,
    initials: "DC",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-secondary shadow-sm border-b border-border/40 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-20 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label justify-center mb-4 block"
          >
            Testimonios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-foreground"
          >
            Experiencias <em>reales</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-8 border border-border/80 shadow-lg relative group hover:border-accent/20 hover:shadow-xl transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-8 right-8" />
              
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/70 leading-relaxed mb-8 text-[15px]">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-navy-foreground text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
