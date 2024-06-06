import React, { useState } from 'react';
import './presentation.css';

function Presentation() {
  const [openSections, setOpenSections] = useState({
    parcours: false,
    experiences: false,
    stages: false,
    formations: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="ConteneurPresentationPage">
      <h1 className="TitlePresentationPage" onClick={() => toggleSection('parcours')}>
        A propos de moi
      </h1>
      <div className={`TextePresentationPage ${openSections.parcours ? 'open' : ''}`}>
        <h1 className="titleParcours">Parcours</h1>
        <p>
          Je me présente, je m'appelle Elodie. Je voudrais bien réussir ma reconversion
          professionnelle dans les métiers du web. J'ai abordé des domaines comme le
          marketing, l'informatique, le secrétariat, la production, l'accueil...tant au
          niveau des formations, stages, et parcours professionnels.
        </p>
      </div>

      <h1 className="TitleExperiences" onClick={() => toggleSection('experiences')}>
        Experiences professionnels
      </h1>
      <div className={`TextePresentationPage ${openSections.experiences ? 'open' : ''}`}>
        <ul>
          <li>Intégrateur Web Openclassrooms</li>
          <li>Agent d'Accueil</li>
          <li>Opératrice polyvalente de production</li>
          <li>Secrétariat médical</li>
          <li>Chargée web marketing</li>
        </ul>
      </div>

      <h3 className="TitleStages" onClick={() => toggleSection('stages')}>
        Stages
      </h3>
      <div className={`TitleEntete ${openSections.stages ? 'open' : ''}`}>
        <ul>
        <li className='TitlePro'>Immersion professionnel</li>
          <li>Agent d'accueil au syndicat des eaux (1 semaine)</li>
          <li>Agent d'accueil à l'Hôpital (2 semaines)</li>
          <li>Secrétariat médical à l'Hôpital (1 semaine)</li>
          </ul>
          <ul>
      <li className='TitlePro'>Stage étudiant de validation d'IUT </li>
        <li>Chargé web Marketing dans une petite entreprise de vêtements lumineux</li>
    </ul>
      </div>

      <h1 className="TitleFormations" onClick={() => toggleSection('formations')}>
        Formations
      </h1>
      <div className={`TextePresentationPage ${openSections.formations ? 'open' : ''}`}>
        <ul>
          <li>Intégrateur web d'Openclassrooms(à distance-en cours)</li>
          <li>Agent de production</li>
          <li>Certificat de secrétariat médical (par correspondance-obtenu)</li>
          <li>DUT SRC/ MMI (Métiers du multimédia-obtenu)</li>
        </ul>
      </div>
    </section>
  );
}

export default Presentation;