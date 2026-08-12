const groups = [
  {
    title: 'Bolsas con diseño',
    desc: 'Bolsas personalizadas para tu marca, regalo o evento, con el diseño que necesites.',
    items: ['Papel o tela', 'Logo o arte propio', 'Por unidad o por lote'],
  },
  {
    title: 'Stickers impermeables',
    desc: 'Aguantan sol, lluvia y uso diario. Ideales para productos, notebooks o vidrieras.',
    items: ['Corte por contorno', 'Terminación mate o brillante', 'Cualquier tamaño'],
  },
  {
    title: 'Cierres de bolsa',
    desc: 'Cierres y accesorios para darle terminación profesional a tu packaging.',
    items: ['A juego con tu diseño', 'Distintos anchos', 'Venta por cantidad'],
  },
  {
    title: 'Fotos Polaroid & Instax',
    desc: 'Tus fotos favoritas con ese estilo instantáneo, para regalar o decorar.',
    items: ['Formato Polaroid', 'Formato Instax', 'Packs para eventos'],
  },
  {
    title: 'Toppers para tortas',
    desc: 'El detalle final para cumpleaños, casamientos y celebraciones.',
    items: ['Nombre o frase', 'Diseño a juego con la temática', 'Entrega rápida'],
  },
  {
    title: 'Carteles chicos',
    desc: 'Carteles resistentes para casa, local o cochera.',
    items: ['"Prohibido estacionar"', '"Propiedad privada"', 'Textos personalizados'],
  },
  {
    title: 'Curriculums vitae',
    desc: 'Diseño y armado de tu CV para que se destaque desde el primer vistazo.',
    items: ['Diseño a medida', 'Formato para imprimir o PDF', 'Ajustes incluidos'],
  },
  {
    title: 'Tarjetas de presentación',
    desc: 'Tu marca en la mano de cada cliente, con una tarjeta que se recuerda.',
    items: ['Diseño original', 'Distintos papeles', 'Por lote'],
  },
  {
    title: 'Textil estampado',
    desc: 'Remeras y buzos estampados con tu diseño, marca o idea.',
    items: ['Remeras', 'Buzos', 'Estampado por unidad o en cantidad'],
  },
]

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <h2>Todo lo que tu idea necesita para ser <em>realizada</em>.</h2>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          {groups.map((g) => (
            <article className="service-card" key={g.title}>
              <div className="service-icon">{g.icon}</div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
