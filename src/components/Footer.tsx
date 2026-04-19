const Footer = () => {
  return (
    <footer 
      className="bg-gradient-to-b from-[#1B2A5E] to-[#0F1C3F] pt-24 pb-12 border-t border-navy-foreground/5 relative z-20"
      style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)', marginTop: '-40px' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#inicio" className="transition-opacity hover:opacity-80 flex items-center">
            <img 
              src="/logo-marcelo.png" 
              alt="Marcelo Jara" 
              className="h-6 w-auto object-contain border-0 outline-none opacity-80"
            />
          </a>
          <div className="flex flex-wrap justify-center gap-8 text-base md:text-xs text-navy-foreground/40 uppercase tracking-wider">
            <a href="#servicios" className="hover:text-navy-foreground/80 transition-colors">Vida y Familia</a>
            <a href="#servicios" className="hover:text-navy-foreground/80 transition-colors">Ahorro y Retiro</a>
            <a href="#servicios" className="hover:text-navy-foreground/80 transition-colors">Automotor</a>
            <a href="#servicios" className="hover:text-navy-foreground/80 transition-colors">Hogar</a>
            <a href="#servicios" className="hover:text-navy-foreground/80 transition-colors">ART</a>
          </div>
        </div>
        <div className="border-t border-navy-foreground/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base md:text-xs text-navy-foreground/30">
          <p>© {new Date().getFullYear()} Marcelo Jara — Asesor de Seguros. Salta, Argentina. MP 84996.</p>
          <a href="/politica-privacidad.html" className="hover:text-gold transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
