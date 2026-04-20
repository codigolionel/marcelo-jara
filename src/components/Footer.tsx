const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-[#1B2A5E] to-[#0F1C3F] pt-24 pb-12 border-t border-navy-foreground/5 relative z-20"
      style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)', marginTop: '-40px' }}
    >
      <div className="container mx-auto px-6">

        {/* BLOQUE SUPERIOR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#inicio" className="transition-opacity hover:opacity-80 flex items-center">
            <img
              src="/logo-marcelo1.png"
              alt="Marcelo Jara"
              className="h-[104px] w-auto object-contain border-0 outline-none opacity-80"
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

        {/* BLOQUE INFERIOR */}
        <div className="border-t border-navy-foreground/5 mt-8 pt-6 
        flex flex-col md:flex-row items-center justify-between gap-3 
        text-xs text-navy-foreground/40">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start text-center md:text-left">

            <span>
              © {new Date().getFullYear()} Linel. Todos los derechos reservados.
            </span>

            <span className="hidden md:inline">|</span>

            <div className="flex items-center gap-2">
              <img
                src="/linel.png"
                alt="Linel"
                className="w-3 h-3 object-contain"
              />
              <span>Linel.com.ar</span>
            </div>

          </div>

          {/* DERECHA */}
          <a
            href="/politica-privacidad.html"
            className="hover:text-gold transition-colors"
          >
            Política de privacidad
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;