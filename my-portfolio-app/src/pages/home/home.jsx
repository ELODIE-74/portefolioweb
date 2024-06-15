import React, { useRef, useEffect } from 'react';
import './home.css';
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
      <div className="home-container">
        <div className="text-container" ref={textContainerRef}>
          <p>
            Bienvenue sur mon site. 
            Intégrateur web. 
            <br />
            Projets semi-professionels.
            Intérpréter les besoins des clients. 
            <br />
            Découvrer qui je suis.
            Je ne suis pas une intelligence artificielle, je suis bien réel. 
          </p>
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