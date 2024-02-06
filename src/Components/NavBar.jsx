// En tu archivo NavBar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="navbar-container glass-effect">
      <ul className="nav-list">
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/calculadora' ? 'active' : ''}`}>
          <Link to="/calculadora">Calculadora</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/tareas' ? 'active' : ''}`}>
          <Link to="/tareas">Tareas</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
