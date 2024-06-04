import React, { useRef } from 'react';
import './home.css';
import ProjectSlider from '../../components/slider/slider';
import ProjectList from '../../components/card/card'; // Importez le composant ProjectList
function Home() {
  const presentationSectionRef = useRef(null);

  return (
    <div>
      <div className="title-container">
        <h1>PORTFOLIO</h1>
        <h2>Venez découvrir mon univers</h2>
        <h3>Présentation</h3>
      </div>
      <div className="home-container">
        <div className="text-container">
          <p>
            En reconversion professionnel dans les métiers du numérique, j'ai suivi pendant quelques temps une formation
            d'intégrateur web auprès de l'organisme de formation Openclassromm. Cette formation m'a permis de repousser
            mes limites et d'aborder de nouveaux horizons tants sur le plan technique que relationnel.
            <br />
            Grâce à une immersion avec des projets semi-professionels en condition réels avec des scénarios ou on devait répondre
            à des besoins clients tant utlisateurs que clients. Il y a eu de nombreux challenges pour traduire les besoins exprimées
            en fonctionnalitées et améliorer les intéractions de l'interface utlisateur.
            <br />
            Je vous invite à vous promener sur les différentes sections de mon portfolio pour découvrir qui je suis.
          </p>
        </div>
        <div className="image-container">
          <ProjectSlider />
        </div>
       
        </div>
        <div className="project-list-container">
          <ProjectList /> {/* Ajoutez le composant ProjectList ici */}
        </div>
      </div>
  );
}

export default Home;