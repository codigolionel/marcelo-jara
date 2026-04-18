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
    { icon: MapPin, label: "Ubicación", value: "Buenos Aires, Argentina" },
    { icon: Phone, label: "Teléfono", value: "+54 9 11 1234-5678" },
    { icon: Mail, label: "Email", value: "marcelo@jaraseguros.com.ar" },
    { icon: Clock, label: "Horario", value: "Lun a Vie, 9:00 a 18:00" },
  ];

  return (
    <section id="contacto" className="pt-8 pb-24 lg:pt-12 lg:pb-32 bg-background shadow-sm border-b border-border/40 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-label mb-4 block"
            >
              Contacto
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-heading text-foreground mb-6"
            >
              Escribime cuando quieras<span className="text-gold">.</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Respondo personalmente. Sin formularios que van a ningún lado, sin vendedores intermedios.
            </p>

            <div className="space-y-5 mb-8">
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

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm mb-6"
            >
            <h3 className="font-heading text-2xl text-foreground mb-6">Escribime tu consulta</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-base md:text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all text-base md:text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-base md:text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all text-base md:text-sm"
                  placeholder="Tu número de teléfono"
                />
              </div>
              <div>
                <label className="block text-base md:text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/40 transition-all resize-none text-base md:text-sm"
                  placeholder="Contame en qué te puedo ayudar..."
                />
              </div>
              <div className="pt-6">
                {/* Espacio reservado para el logo de Cloudflare Turnstile */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-6 py-2.5 rounded-full text-base md:text-sm font-bold tracking-wide shadow-lg hover:shadow-[0_10px_40px_rgb(17,24,39,0.3)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  <Send className="w-4 h-4" />
                  Enviar consulta
                </button>
              </div>
            </div>
            </motion.form>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center justify-center sm:flex-row sm:justify-between py-6 px-8"
            >
              <p className="text-base md:text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-4 sm:mb-0">Síguenos en nuestras redes</p>
              <div className="flex items-center justify-center gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center text-navy hover:text-gold hover:bg-navy/10 transition-all hover:-translate-y-1">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center text-navy hover:text-gold hover:bg-navy/10 transition-all hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
