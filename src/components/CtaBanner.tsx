import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import bgTexture from "@/assets/background1.png";

const WHATSAPP_URL = "https://wa.me/5493875043079";

const CtaBanner = () => {
  return (
    <section className="py-20 bg-[#1B2A5E] grain overflow-hidden relative">
      {/* Texture overlay */}
      <img
        src={bgTexture}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        style={{ opacity: 1 }}
      />
      {/* Subtle glow orbs */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-5xl text-navy-foreground mb-8 tracking-tight"
        >
          ¿Hablamos?
        </motion.h2>
        <p className="text-navy-foreground/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          Sin compromiso. Me contás tu situación y vemos juntos qué tiene sentido para vos.
        </p>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-6 py-2.5 rounded-full text-base md:text-sm font-bold tracking-wide hover:shadow-[0_10px_40px_rgb(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
