import { GiJusticeStar } from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav>
      <GiJusticeStar />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Quem somos</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#clients">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><button><a href="#contact">Agende um Atendimento</a></button></li>
      </ul>
    </nav>
  )
}

export default NavBar