import About from './components/About';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
