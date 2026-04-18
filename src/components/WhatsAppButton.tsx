import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5493875043079";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

const WhatsAppButton = ({ text = "Consultar", className = "" }: WhatsAppButtonProps) => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-whatsapp text-whatsapp-foreground px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {text}
    </a>
  );
};

export default WhatsAppButton;
