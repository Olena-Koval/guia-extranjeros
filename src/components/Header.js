// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Guía para Extranjeros en España</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/tramites">Trámites</Link></li>
          <li><Link to="/mapa">Mapa</Link></li>
          <li><Link to="/ayudas">Ayudas Sociales</Link></li>
          <li><Link to="/faq">Preguntas Frecuentes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
