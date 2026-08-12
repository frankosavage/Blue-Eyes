import { INSTAGRAM_HANDLE, INSTAGRAM_URL, whatsappLink } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (

    <footer className="footer">
      <div className="container">

        <nav className="footer-links">
        </nav>
      </div>

      <div className="footer-bottom">© {year} BLUE EYES.</div>
      <div className="footer-bottom">Pagina web construida por <em>SOLUCIONESF1</em>.</div>
    </footer>

  )
}
