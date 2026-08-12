import Nav from './components/Nav'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'
import Instagram from './components/Instagram'
import Consultar from './components/Consultar'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

export default function App() {
  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Servicios/>
        <ComoFunciona/>
        <Instagram/>
        <Consultar/>
      </main>
      <Footer/>
      <Whatsapp/>
    </>
  )
}
