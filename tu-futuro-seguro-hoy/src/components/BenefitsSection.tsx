import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Handshake } from "lucide-react";
import service01 from "@/assets/service-01.jpg";
import service02 from "@/assets/service-02.jpg";
import service03 from "@/assets/service-03.jpg";

const benefits = [
  { 
    icon: ShieldCheck, 
    title: "Tu Vehículo", 
    image: service01,
    description: "Coberturas de terceros, todo riesgo y asistencia en ruta. Para que manejes con la certeza de que estoy ahí si algo pasa." 
  },
  { 
    icon: Landmark, 
    title: "Tu Hogar", 
    image: service02,
    description: "Protección integral contra incendio, robo, daños por agua y asistencia 24 hs. Porque tu casa es el lugar donde todo importa." 
  },
  { 
    icon: Handshake, 
    title: "Tu Empresa (ART)", 
    image: service03,
    description: "Gestión estratégica de Riesgos del Trabajo: optimización de costos, mejora en prestaciones y acompañamiento en cada caso." 
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-28 bg-background relative z-20 shadow-sm border-b border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-20 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label justify-center mb-4 block"
          >
            Soluciones integrales
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-foreground"
          >
            Cada cobertura, <em>pensada para tu realidad</em>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-lg leading-relaxed mt-4"
          >
            Cada decisión, tomada junto a vos.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 [perspective:2000px]">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group text-center bg-card rounded-2xl border border-border/80 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img 
                  src={b.image} 
                  alt={b.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 group-hover:scale-105 transition-all duration-300">
                  <b.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
