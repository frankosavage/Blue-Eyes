import { whatsappLink } from '../config'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Hola! Quiero hacer una consulta')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <img
        src="../public/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  )
}