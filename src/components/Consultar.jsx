import { whatsappLink } from '../config'

export default function Accion() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>
          Contanos y <em>lo hacemos realidad</em>.
        </h2>
        <p>
          Este boton te lleva a nuestro Whatsapp
        </p>
        <a className="btn btn-primary" href={whatsappLink('Hola! Quiero hacer una consulta')} target="_blank" rel="noopener noreferrer">
        Consultar
        </a>
      </div>
    </section>
  )
}