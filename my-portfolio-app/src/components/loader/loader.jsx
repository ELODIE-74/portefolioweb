import React from 'react';
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderConteneur">
        <h1>Portfolio d'Elodie</h1>
        <div className="loaderConteneurChargement"></div>
      </div>
    </div>
  );
};

export default Loader;