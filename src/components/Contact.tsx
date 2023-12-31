import { IoLogoWhatsapp } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'

const Contact = () => {

  return (
    <div className="contact" id="contact">
      <h1>Contato</h1>
      <section>
        <a href="https://api.whatsapp.com/send?phone=31982208900" target='__blank'><IoLogoWhatsapp /></a>
        <a href="mailto:juarezgcjr@gmail.com" target='__blank'><BiLogoGmail /></a>

        <div>
          <h2>Nossos escritórios </h2>
          <p>Rua Qualquer, 123 - Cidade, Estado</p>
          <p>Rua Qualquer, 123 - Cidade, Estado</p>
          <p>Rua Qualquer, 123 - Cidade, Estado</p>
        </div>

      </section>
    </div>
  )
}

export default Contact