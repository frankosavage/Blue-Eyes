import { whatsappLink } from '../config'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container">
        <a href="#top" className="nav-brand">
          <img src="/logo.png" alt="Blue Eyes Gráfica" />
          <div className="nav-brand-text">
            Blue Eyes
          </div>
        </a>

        <nav className="nav-links">
          <a href="#servicios">Qué hacemos</a>
          <a href="#como-pedirnos">Cómo pedirnos</a>
        </nav>

        <div className="nav-cta">
          <a
            className="btn btn-primary"
            href={whatsappLink('Hola! Quiero hacer una consulta')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
