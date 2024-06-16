import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-laptop"></i>
        <span className='textelogo'>Portfolio d'Elodie</span>
      </div>
      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className="menu-list">
          <li>
            <Link to="#" onClick={() => scrollToSection('presentation')}>Présentation</Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection('projets')}>Projets</Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection('competences')}>Compétences</Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection('cv')}>CV</Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
/*import React, { useRef } from 'react'; // Importez useRef ici
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const presentationSectionRef = useRef(null);

  const scrollToPresentationSection = () => {
    presentationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="header">
      <div className="logo">
        <i class="fa-solid fa-laptop"></i>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
          <Link to="/presentation" >Présentation</Link>
     
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/competences">Compétences</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;*/