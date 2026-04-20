import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronUp } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  // { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const WHATSAPP_URL = "https://wa.me/5493875043079";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${scrolled ? "shadow-sm py-1.5 border-b border-border/40" : "py-3"
      }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#inicio" className="transition-opacity hover:opacity-80 flex items-center">
          <img
            src="/logo-marcelo.png"
            alt="Marcelo Jara"
            className="h-11 md:h-19 w-auto object-contain border-0 outline-none"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-[16px] font-semibold tracking-wide transition-all duration-300 flex items-center group ${scrolled ? "text-navy hover:text-[#C0392B]" : "text-navy hover:text-[#C0392B]"
                }`}
            >
              <ChevronUp className="w-3.5 h-3.5 text-[#C0392B] mr-1.5 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300" />
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-5 py-2 rounded-full text-base lg:text-xs font-bold tracking-wide transition-all duration-300"
          >
            Consultar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden text-navy`}>
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden h-screen bg-white shadow-2xl border-t border-border/40 px-6 py-12 flex flex-col space-y-8 animate-reveal-up overflow-y-auto pb-32">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-navy/70 hover:text-navy text-lg font-semibold tracking-wide transition-all translate-x-0 hover:translate-x-2 duration-300"
            >
              <ChevronUp className="w-4 h-4 text-navy/20" />
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit mx-auto items-center justify-center gap-2 bg-[#1B2A5E] text-white px-8 py-3.5 rounded-full text-base lg:text-sm font-bold shadow-lg shadow-navy/10 active:scale-95 transition-all duration-300">
            Consultar por WhatsApp
          </a>

          <div className="mt-auto pt-12 text-center border-t border-border/40 px-4">
            <p className="text-base lg:text-[10px] text-navy/30 uppercase tracking-[0.2em] leading-relaxed font-semibold">
              Marcelo Jara — Asesor de Seguros<br />
              <span className="text-[#C0392B]/60 font-bold">Matrícula Profesional MP 84996</span><br />
              Acompañamiento responsable para personas y empresas
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
