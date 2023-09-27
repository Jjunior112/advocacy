import { GiJusticeStar } from 'react-icons/gi';
import {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setMenu] = useState('hideMenu');

  const openMenu = () => {
    if (!isOpen) {
      setMenu('showMenu')
    }
    else {
      setMenu('hideMenu')
    }
  }
  return (
    <nav>
      <GiJusticeStar />
      <div className="desktop">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Quem somos</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#clients">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><button><a href="#contact">Agende um Atendimento</a></button></li>
        </ul>
      </div>
      <div className="mobile">
        <Hamburger toggled={isOpen} toggle={setIsOpen} onToggle={openMenu} color='#fff' />
        <ul className={showMenu}>

          <li><a href="#home">Home</a></li>
          <li><a href="#about">Quem somos</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#clients">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><button><a href="#contact">Agende um Atendimento</a></button></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar