import { motion } from "framer-motion";
import { Heart, TrendingUp, Activity, HardHat, ArrowUpRight, MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const services = [
  {
    icon: Heart,
    number: "01",
    title: "Vida y Familia",
    subtitle: "Protección real",
    description: "Si mañana no estás, ¿tu familia puede seguir adelante? Diseñamos coberturas para que la respuesta sea sí.",
    features: ["Cobertura por fallecimiento", "Invalidez total y parcial", "Enfermedades graves", "Planes flexibles", "Diagnóstico de cáncer", "Transplantes", "Cuidados intensivos"],
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Ahorro y Retiro",
    subtitle: "Tu esfuerzo, protegido",
    description: "Tu esfuerzo de hoy tiene que valer mañana. Te ayudo a construir un fondo que crezca con seguridad y a tu ritmo.",
    features: ["Planes de retiro", "Capitalización", "Rendimiento garantizado", "Flexibilidad de aportes"],
  },
  {
    icon: Activity,
    number: "03",
    title: "Tu Retiro",
    subtitle: "Tranquilidad ganada",
    description: "Años de trabajo merecen un descanso sin preocupaciones. Armamos juntos el fondo que te dé esa tranquilidad.",
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
            Lo que hacemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-navy mb-6"
          >
            Una cobertura para cada
            <br className="max-md:hidden" /> <em>etapa de tu vida</em>
          </motion.h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Cada situación es distinta. Por eso no trabajo con soluciones genéricas. Comparo opciones y te doy la mejor cobertura al mejor precio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 [perspective:2000px]">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-[#E0E0E0] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1B2A5E 0%, #C0392B 100%)' }} />

              {/* Card content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl group-hover:bg-white/15 flex items-center justify-center mb-6 transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-[#1B2A5E] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-[#1B2A5E] group-hover:text-white mb-3 transition-colors duration-300">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] group-hover:text-white/85 leading-relaxed mb-6 text-base md:text-[15px] transition-colors duration-300">
                  {s.description}
                </p>

                {/* Features with checkmarks */}
                <ul className="space-y-3 pt-6 border-t border-[#E0E0E0] group-hover:border-white/20 transition-colors duration-300">
                  {s.features.map((f) => (
                    <li key={f} className="text-base md:text-[15px] text-[#1B2A5E]/70 group-hover:text-white/80 flex items-center gap-3 transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-[#C0392B] group-hover:text-white/70 shrink-0 transition-colors duration-300" />
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
