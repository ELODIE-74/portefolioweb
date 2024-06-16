import { useState } from 'react';
import "./cv.css";
import cvImage from "./mon_cv.png";


const CV = () => {
  const [showCV, setShowCV] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCVClick = () => {
    setShowCV(true);
    setIsZoomed(true);
  };

  const handleCloseCV = () => {
    setShowCV(false);
    setIsZoomed(false);
  };

  const handleDownloadCV = () => {
    // Créer un lien de téléchargement pour le CV
    const link = document.createElement('a');
    link.href = cvImage;
    link.download = 'mon_cv.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="cv">
      {/* Affichage de l'icône de CV */}
      <div className="icon-container">
        <h1>Consulter mon cv en 1 clic!</h1>
        <i className="fa fa-file-pdf icon" onClick={handleCVClick}></i>
        <h1>Télécharger le en un clic!</h1>
        <i className="fa fa-download download-icon" onClick={handleDownloadCV}></i>
      </div>

      {/* Affichage du CV */}
      {showCV && (
        <div
        //effet zoom
          className={`cv-container ${isZoomed ? 'zoomed' : ''}`}
          onClick={handleCloseCV}
        >
          <img src={cvImage} alt="CV" className="cv-image" />
        </div>
      )}
       
    </div>
    
  );
};

export default CV;