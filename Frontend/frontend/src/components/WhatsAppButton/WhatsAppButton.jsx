import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href="https://wa.me/254718904059?text=Hi%20Bernadette%20Spa%20%26%20Barbershop%2C%20I%27d%20like%20to%20book%20an%20appointment"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span className="whatsapp-fab__label">Book on WhatsApp</span>
    </a>
  );
}
