import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Handshake, ArrowUpRight } from "lucide-react";

const benefits = [
  { 
    icon: ShieldCheck, 
    title: "Tu Auto", 
    description: "Terceros, todo riesgo o franquicia. Te explico la diferencia real y te ayudo a elegir sin pagar de más." 
  },
  { 
    icon: Landmark, 
    title: "Tu Casa", 
    description: "Incendio, robo, daños por agua, asistencia 24 hs. Tu hogar protegido para que puedas dormir tranquilo." 
  },
  { 
    icon: Handshake, 
    title: "Tu Empresa", 
    description: "ART sin vueltas. Optimizamos costos, mejoramos prestaciones y te acompañamos en cada caso." 
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
            Coberturas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-foreground"
          >
            Para cada cosa que importa, <em>hay una solución.</em>
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
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.4, 
                delay: i * 0.08, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-[#E0E0E0] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A5E] to-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Card content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#1B2A5E]/5 group-hover:bg-white/15 flex items-center justify-center mb-6 transition-colors duration-300">
                  <b.icon className="w-6 h-6 text-[#1B2A5E] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-[#1B2A5E] group-hover:text-white mb-3 transition-colors duration-300">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] group-hover:text-white/85 leading-relaxed mb-8 text-base md:text-[15px] transition-colors duration-300">
                  {b.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
