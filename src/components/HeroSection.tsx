import { motion } from "framer-motion";
import heroImage from "@/assets/hero-family.jpg";
import bgTexture from "@/assets/background1.png";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex flex-col-reverse lg:flex-row min-h-screen lg:h-screen w-full">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 bg-[#1B2A5E] flex flex-col justify-center px-5 sm:px-10 lg:px-16 xl:px-20 pt-14 pb-10 lg:pt-32 lg:pb-12 relative z-10 min-h-[50vh] lg:h-full overflow-hidden">
        {/* Texture overlay */}
        <img
          src={bgTexture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          style={{ opacity: 1 }}
        />
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           className="max-w-xl mx-auto lg:mx-0 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/20 relative z-10 shadow-sm lg:mt-0">
            Asesor de Seguros
          </span>
          
          <h1 className="font-heading text-[2.5rem] sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] text-white font-bold leading-[1.1] tracking-tight mb-4 transform translate-y-[5px]">
            Cuidar lo que construiste, proyectar lo que soñás.
          </h1>

          {/* Red divider */}
          <div className="w-12 h-[3px] bg-[#C0392B] rounded-full mb-4" />
          
          <p className="text-white/80 text-[13px] sm:text-sm lg:text-[15px] xl:text-[15px] leading-relaxed font-body mb-5 max-w-[90%] lg:max-w-none">
            Detrás de cada póliza hay una historia, una familia y un proyecto de vida. Mi trabajo es acompañarte a proteger ese camino.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center bg-whatsapp text-white px-7 py-2.5 rounded-full text-sm md:text-[15px] font-semibold tracking-wide hover:shadow-[0_10px_40px_rgb(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroImage} 
          alt="Familia feliz" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
