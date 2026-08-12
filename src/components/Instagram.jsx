import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config'

const tiles = [
  {
    img: '/gallery/1.jpg',
    link: INSTAGRAM_URL,
  },
  {
    img: '/gallery/2.jpg',
    link: INSTAGRAM_URL,
  },
  {
    img: '/gallery/3.jpg',
    link: INSTAGRAM_URL,
  },
  {
    img: '/gallery/4.jpg',
    link: INSTAGRAM_URL,
  },
]

export default function InstagramTeaser() {
  return (
    <section className="section" id="instagram">
      <div className="container">
        <div className="insta-head">
          <div>
            <h2>
              Mirá lo último en <em>Instagram</em>
            </h2>
            <br/>
            <span className="eyebrow">Trabajos recientes</span>
          </div>
          <a className="btn btn-ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Seguinos {INSTAGRAM_HANDLE}</a>
        </div>

        <div className="insta-grid">
          {tiles.map((t) => (
            <a className="insta-tile" key={t.img} href={t.link} target="_blank" rel="noopener noreferrer" aria-label="Ver en Instagram"> <img src={t.img} alt="" /></a>
          ))}
        </div>
      </div>
    </section>
  )
}
