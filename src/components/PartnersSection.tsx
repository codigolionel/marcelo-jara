import { motion } from "framer-motion";
import libraLogo from "@/assets/libra.jpeg";
import mapfreLogo from "@/assets/Mapfre.jpeg";
import omintLogo from "@/assets/omint.jpeg";
import sancorLogo from "@/assets/sancor-seguros.jpeg";
import paranaLogo from "@/assets/parana.jpeg";
import prevencionLogo from "@/assets/prevencion.jpeg";
import laCajaLogo from "@/assets/la-caja.jpeg";
import integrityLogo from "@/assets/integrity.jpeg";
import carusoLogo from "@/assets/caruso.jpeg";
import beneficioLogo from "@/assets/beneficio.jpeg";
import bbvaLogo from "@/assets/bbva.jpeg";
import axaLogo from "@/assets/axa.jpeg";
import cnpLogo from "@/assets/cnp.jpeg";
import assistanceLogo from "@/assets/assistance.jpeg";
import liderarLogo from "@/assets/liderar.jpeg";
import lifeLogo from "@/assets/life.jpeg";

const partners = [
  { name: "Libra Seguros", src: libraLogo },
  { name: "Mapfre", src: mapfreLogo },
  { name: "Omint", src: omintLogo },
  { name: "Sancor Seguros", src: sancorLogo },
  { name: "Paraná Seguros", src: paranaLogo },
  { name: "Prevención Seguros", src: prevencionLogo },
  { name: "La Caja", src: laCajaLogo },
  { name: "Integrity", src: integrityLogo },
  { name: "Caruso", src: carusoLogo },
  { name: "Beneficio Seguros", src: beneficioLogo },
  { name: "BBVA Seguros", src: bbvaLogo },
  { name: "AXA", src: axaLogo },
  { name: "CNP Seguros", src: cnpLogo },
  { name: "Omint Assistance", src: assistanceLogo },
  { name: "Liderar", src: liderarLogo },
  { name: "Life Seguros", src: lifeLogo },
];

const PartnersSection = () => {
  return (
    <section 
      id="partners" 
      className="pt-10 pb-24 px-6 overflow-hidden relative"
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

        {/* Carrusel infinito de logos */}
        <div className="relative w-full max-w-[100vw] overflow-hidden py-4 -ml-6 pr-12 w-[calc(100%+3rem)] md:-ml-0 md:pr-0 md:w-full">
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-[#f7f7f8] to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-[#f7f7f8] to-transparent z-10" />
          
          <div className="flex w-max animate-marquee space-x-4 md:space-x-8 pl-4 lg:pl-0">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center p-3 md:p-5 rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] shrink-0 w-[140px] md:w-[180px] h-[90px] md:h-[110px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="w-full h-full max-w-[110px] md:max-w-[140px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
