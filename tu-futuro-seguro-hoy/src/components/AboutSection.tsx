import { motion } from "framer-motion";
import { Award, Users, Clock, Quote, ShieldCheck } from "lucide-react";
import advisorPhoto from "@/assets/advisor-photo.jpg";
import WhatsAppButton from "./WhatsAppButton";

const AboutSection = () => {
  return (
    <section 
      id="sobre-mi" 
      className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#1B2A5E] to-[#0F1C3F] relative overflow-hidden isolate"
      style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)', marginTop: '-40px' }}
    >
      {/* Elegant Dark Gradient Layer (Dark at bottom, fading UP) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-[#020611]/80 to-transparent -z-20 pointer-events-none" />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[800px] bg-gold/5 rounded-full blur-[150px] -z-10 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group px-4 md:px-0">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 md:-inset-6 border border-white/5 rounded-[2.5rem] -z-10 group-hover:border-gold/20 transition-colors duration-700" />
              <div className="absolute inset-2 md:inset-6 bg-gold/5 rounded-[2rem] -z-10 group-hover:bg-gold/10 transition-colors duration-700 translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-navy/10 mix-blend-overlay z-10" />
                <img
                  src={advisorPhoto}
                  alt="Marcelo Jara - Asesor de Seguros"
                  className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                  width={640}
                  height={800}
                />
              </div>

              {/* Floating Glassmorphism Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-2 md:-right-12 bg-navy/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl max-w-[260px]"
              >
                <Quote className="w-8 h-8 text-gold/20 absolute top-4 right-4 pointer-events-none" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Compromiso</p>
                    <p className="text-gold text-xs uppercase tracking-wider">Garantizado</p>
                  </div>
                </div>
                <p className="text-white/80 text-[14px] italic leading-relaxed font-heading">
                  "Mi mayor éxito es tu tranquilidad. Trabajo para que vivas sin preocupaciones."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Sobre Marcelo Jara
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8">
              Estás en buenas manos
              <br />
              <em className="italic text-gold font-light">con 10 años de experiencia.</em>
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed mb-12 text-lg font-light">
              <p>
                Con <strong className="text-white font-medium">10 años de experiencia</strong>, entiendo que lo más importante es estar cuando se me necesita.
                Brindo un acompañamiento responsable y presente, ayudándote a <strong className="text-gold font-medium">seleccionar la cobertura adecuada
                  para tus problemas reales</strong>. Me involucro personalmente en cada caso, porque detrás de cada consulta hay una persona que confía en mi palabra.
              </p>
            </div>

            {/* Premium Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                { icon: Clock, value: "+10", label: "Años de experiencia" },
                { icon: Users, value: "100%", label: "Compromiso real" },
                { icon: Award, value: "MP 84996", label: "Matrícula Profesional" },
              ].map((stat, idx) => (
                <div key={stat.label} className="relative group p-4 border-l border-white/10 hover:border-gold transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 whitespace-nowrap to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <stat.icon className="w-5 h-5 text-gold/80 mb-3" />
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] md:text-[11px] text-white/50 tracking-widest uppercase font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex mt-4">
              <WhatsAppButton text="Agendar" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
