import { motion } from "framer-motion";
import libraLogo from "@/assets/libra.jpeg";
import mapfreLogo from "@/assets/Mapfre.jpeg";
import omintLogo from "@/assets/omint.jpeg";
import sancorLogo from "@/assets/sancor-seguros.jpeg";
import paranaLogo from "@/assets/parana.jpeg";
import prevencionLogo from "@/assets/prevencion.jpeg";

const partners = [
  { name: "Libra Seguros", src: libraLogo },
  { name: "Mapfre", src: mapfreLogo },
  { name: "Omint", src: omintLogo },
  { name: "Sancor Seguros", src: sancorLogo },
  { name: "Paraná Seguros", src: paranaLogo },
  { name: "Prevención Seguros", src: prevencionLogo },
];

const PartnersSection = () => {
  return (
    <section 
      id="partners" 
      className="py-24 px-6 overflow-hidden relative"
    >
      {/* Skewed Background */}
      <div className="absolute inset-0 bg-[#f7f7f8] -skew-y-2 origin-left -z-10" />
      
      <div className="max-w-[1100px] mx-auto">
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-heading text-foreground text-center mb-8"
        >
          Algunas compañías con las que <em>trabajo</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-muted-foreground text-base max-w-[520px] mx-auto mb-12 leading-relaxed"
        >
          Trabajo con las aseguradoras más reconocidas del mercado para ofrecerte
          las mejores opciones en cobertura y precio.
        </motion.p>

        {/* Grilla de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 w-full max-w-[160px] aspect-video"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="w-[120px] h-[60px] object-contain grayscale opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
