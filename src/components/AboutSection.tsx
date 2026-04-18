import { motion } from "framer-motion";
import { Check } from "lucide-react";
import advisorPhoto from "@/assets/advisor-photo.jpg";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const checks = [
  "Seguros de Vida y Retiro",
  "Automotor y Hogar",
  "ART para Empresas",
  "Matrícula Profesional MP 84996",
];

const AboutSection = () => {
  return (
    <section
      id="sobre-mi"
      className="py-20 lg:py-28 bg-[#F5F5F5] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left Column: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#C0392B] rounded-full" />
              <span className="text-[#C0392B] text-xs md:text-[11px] font-bold tracking-[0.2em] uppercase">
                Sobre Mí
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] text-[#1B2A5E] font-bold leading-[1.15] tracking-tight mb-6">
              10 años acompañando familias y empresas en Salta.
            </h2>

            {/* Main paragraph */}
            <p className="text-base md:text-[15px] text-[#1B2A5E]/70 leading-relaxed mb-8">
              Me llamo Marcelo y llevo 10 años en esto. Aprendí que los seguros no son un trámite — son una conversación sobre lo que querés proteger. Por eso me tomo el tiempo de entender tu situación antes de recomendarte cualquier cobertura.
            </p>

            {/* Checkmarks grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C0392B]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#C0392B]" />
                  </div>
                  <span className="text-base md:text-[15px] text-[#1B2A5E]/80 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Secondary paragraph */}
            <p className="text-base md:text-[15px] text-[#1B2A5E]/60 leading-relaxed mb-8 italic">
              Cuando pasa algo, estoy. Eso es lo único que me importa demostrar.
            </p>

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full text-base md:text-[15px] font-semibold tracking-wide hover:shadow-[0_10px_40px_rgb(37,211,102,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Consultar por WhatsApp
            </a>

            {/* Signature */}
            <div className="mt-6 flex items-center gap-3">
              <p className="font-heading text-2xl text-[#1B2A5E] italic">Marcelo Jara</p>
              <span className="w-px h-6 bg-[#1B2A5E]/20" />
              <p className="text-sm md:text-xs text-[#1B2A5E]/50 leading-tight">
                Asesor de Seguros
              </p>
            </div>
          </motion.div>

          {/* ── Right Column: Images ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative circle behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-[#E8E8E8] -z-10" />

            {/* Main image – Marcelo */}
            <div className="relative z-10 w-[85%] mx-auto">
              <div
                className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(27,42,94,0.18)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%)" }}
              >
                <img
                  src={advisorPhoto}
                  alt="Marcelo Jara - Asesor de Seguros"
                  className="w-full h-auto aspect-[4/5] object-cover"
                  loading="lazy"
                  width={480}
                  height={600}
                />
              </div>

              {/* Accent border frame */}
              <div
                className="absolute -bottom-4 -left-4 w-[60%] h-[40%] border-2 border-[#C0392B]/20 rounded-2xl -z-10"
              />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -bottom-4 -right-2 md:bottom-4 md:right-4 z-0 grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#1B2A5E]/20"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
