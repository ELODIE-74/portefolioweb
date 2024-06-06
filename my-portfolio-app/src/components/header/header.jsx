
import React, { useRef } from 'react'; // Importez useRef ici
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

export default Header;