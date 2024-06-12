import React, { useRef, useEffect } from 'react';
import './home.css';
import ProjectSlider from '../../components/slider/slider';
import ProjectList from '../../components/card/card';
import TechSlider from '../../components/slidericone/slidericone';

function Home() {
  //référence à l'élément text-container avec useRef(null).
  const presentationSectionRef = useRef(null);
  const textContainerRef = useRef(null);

  //j'appelle la fonction typewriterEffect qui ajoute le texte lettre par lettre avec un délai de 50ms entre chaque lettre.
  useEffect(() => {
    if (textContainerRef.current) {
      typewriterEffect(textContainerRef.current);
    }
  }, []);

  //La fonction typewriterEffect prend en paramètre l'élément du DOM et ajoute le texte lettre par lettre en utilisant setInterval.
  const typewriterEffect = (element) => {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };
// un effet machine a écrire
  return (
    <div>
      <div className="title-container">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="home-container">
        <div className="text-container" ref={textContainerRef}>
          <p>
            En reconversion professionnel dans les métiers du numérique. 
            Formation intégrateur web <strong>d'Openclassroms</strong>. 
            <br />
            Immersion avec des projets semi-professionels en condition réels.
            Savoir convertir les besoins des clients en fonctionnalités. 
            <br />
            Je vous invite à vous promener sur les différentes sections de mon portfolio pour découvrir qui je suis.
          </p>
        </div>
        <div className="image-container">
          <ProjectSlider />
        </div>
      </div>
      <div className="project-list-container">
        <ProjectList />
      </div>
      <div className="tech-slider-container">
        <TechSlider />
      </div>
    </div>
  );
}

export default Home;