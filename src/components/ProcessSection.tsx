import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import bgImage from "@/assets/Aliado.webp";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const steps = [
  {
    icon: MessageSquare,
    title: "Consulta inicial",
    description: "Me escribís por WhatsApp o completás el formulario. Charlamos sobre tu situación, sin compromiso.",
  },
  {
    icon: Search,
    title: "Análisis personalizado",
    description: "Estudio tus necesidades y comparo opciones en el mercado para encontrar la cobertura ideal.",
  },
  {
    icon: FileText,
    title: "Propuesta a medida",
    description: "Te presento opciones claras con precios, coberturas y beneficios. Vos elegís con toda la información.",
  },
  {
    icon: CheckCircle2,
    title: "Contratación + seguimiento",
    description: "Gestionamos todo juntos. Después, sigo a tu lado para cualquier consulta o siniestro.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 lg:py-32 relative overflow-hidden isolate">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1B2A5E]/95 to-[#0F1C3F]/98" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="section-label mb-4 block text-white/60">¿Por qué Marcelo Jara?</span>
            <h2 className="editorial-heading text-white mb-6">
              Presencia y claridad en cada <em className="text-white">decisión</em>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Mi enfoque es simple: acompaño a personas y empresas brindando herramientas de decisión para seleccionar la protección apropiada. Me involucro personalmente en cada proyecto, asegurando un trato humano y una respuesta responsable desde el primer contacto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-2.5 rounded-full text-base md:text-sm font-bold tracking-wide hover:shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              Comenzar
            </a>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
                    <s.icon className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-full bg-white/10 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-gold text-base md:text-xs font-semibold tracking-widest">0{i + 1}</span>
                    <h3 className="text-xl font-heading text-white">{s.title}</h3>
                  </div>
                  <p className="text-white/70 text-base md:text-[15px] leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
