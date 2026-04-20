import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/5493875043079`, "_blank");
  };

  const contactInfo = [
    { icon: MapPin, label: "Ubicación", value: "Salta, Argentina" },
    { icon: Phone, label: "Teléfono", value: "+54 9 387 504-3079" },
    { icon: Mail, label: "Email", value: "marcelo@jaraseguros.com.ar" },
    { icon: Clock, label: "Horario", value: "Lun a Vie, 9:00 a 18:00" },
  ];

  return (
    <section id="contacto" className="pt-8 pb-24 lg:pt-12 lg:pb-32 bg-background shadow-sm border-b border-border/40 relative z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-label mb-4 block"
            >
              Contacto
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-heading text-foreground mb-6"
            >
              Escribime cuando quieras<span className="text-gold">.</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Escribime cuando quieras. WhatsApp te llega a mi celular y te contesto en el día.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 mb-10 text-left w-fit mx-auto">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <WhatsAppButton text="Consultar por WhatsApp" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
