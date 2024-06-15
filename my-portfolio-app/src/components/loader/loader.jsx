import React from 'react';
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loaderConteneur">
        <h1>PORTFOLIO</h1>
        <div className="loaderConteneurChargement"></div>
      </div>
    </div>
  );
};

export default Loader;