import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Boton from '../Boton';

// Componente del menú de navegación
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo de AluraFlix" />
      </Link>

      <Boton as={Link} className="EnlaceBoton" to="/registro/video">
        Nuevo video
      </Boton>
    </nav>
  );
}

export default Menu;
