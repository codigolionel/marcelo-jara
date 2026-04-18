import { motion } from "framer-motion";
import { Heart, TrendingUp, Activity, HardHat, ArrowUpRight, MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const services = [
  {
    icon: Heart,
    number: "01",
    title: "Seguros de Vida y Protección Familiar",
    subtitle: "Tranquilidad para tu familia",
    description: "No es solo una cobertura; es la promesa de que, pase lo que pase, los tuyos mantendrán su calidad de vida y podrán cumplir sus sueños. Un respaldo económico para que el futuro de tus hijos nunca se detenga.",
    features: ["Cobertura por fallecimiento", "Invalidez total y parcial", "Enfermedades graves", "Planes flexibles"],
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Ahorro con Propósito",
    subtitle: "Tu futuro empieza hoy",
    description: "Te ayudo a que tu esfuerzo rinda frutos. Diseñamos planes flexibles para que tus ahorros crezcan con seguridad, permitiéndote alcanzar esa meta que tanto planificaste: la casa propia, un viaje o el estudio de los chicos.",
    features: ["Planes de retiro", "Capitalización", "Rendimiento garantizado", "Flexibilidad de aportes"],
  },
  {
    icon: Activity,
    number: "03",
    title: "Tu Retiro, Tu Libertad",
    subtitle: "Disfrutá tu descanso",
    description: "El descanso debe ser una etapa de disfrute, no de preocupaciones. Construimos hoy un fondo complementario que te brinde la autonomía y la paz mental que te merecés después de años de trabajo.",
    features: ["Fondo complementario", "Autonomía financiera", "Planes personalizados", "Flexibilidad de aportes"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-background relative overflow-hidden shadow-sm border-b border-border/40 z-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-6"
          >
            Servicios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-navy mb-6"
          >
            Soluciones para todas
            <br className="max-md:hidden" /> tus <em>necesidades</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 [perspective:2000px]">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 lg:p-12 border border-white/80 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden isolate"
            >
              {/* Card Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Watermark Number */}
              <div className="absolute right-4 bottom-4 lg:right-6 lg:bottom-6 text-[100px] lg:text-[120px] font-heading font-black text-navy/[0.025] group-hover:text-navy/[0.04] group-hover:-translate-y-2 transition-all duration-700 pointer-events-none -z-0 leading-none">
                {s.number}
              </div>

              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center group-hover:bg-navy transition-colors duration-500 shadow-sm group-hover:shadow-lg">
                  <s.icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-500" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gold font-body font-medium tracking-wider text-xs mt-1">
                  {s.subtitle}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] sm:min-h-[72px]">
                {s.description}
              </p>

              <div className="pt-8 border-t border-navy/10">
                <ul className="space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="text-[15px] text-navy/80 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 drop-shadow-sm" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
