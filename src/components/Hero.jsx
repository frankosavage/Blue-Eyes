import { whatsappLink } from '../config'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-copy">
          <h1>
            Ideas que se <em>imprimen</em> bien.
          </h1>
          <p>
           Somos un empredimiento de grafica ubicado en Chivilcoy, tenemos el mejor precio y trabajamos con amor cada proyecto que llega a nuestras manos
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappLink('Hola! Quiero pedir un presupuesto')} target="_blank" rel="noopener noreferrer"> Pedir por WhatsApp
            </a>
            <a className="btn-hero" href="#servicios">
              Lo que podemos hacer
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-ring">
            <svg className="hero-orbit" viewBox="0 0 200 200">
              <defs>
                <path id="orbitPath" d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
              </defs>

            </svg>
            <img src="/logo.png" alt="Blue Eyes Gráfica" />
          </div>
        </div>
      </div>
    </section>
  )
}

