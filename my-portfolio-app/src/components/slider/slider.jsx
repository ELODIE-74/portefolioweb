import React, { useState } from 'react';
import "./slider.css";
import Booki from './Booki.png';
import OhMyFood from './oh_my_food.png';
import Events724 from './724_events.png';
const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Projet BOOKI',
      description: 'Logements en ligne HTML/CSS responsive',
      imageUrl: Booki
    },
    {
      id: 2,
      title: 'Projet Oh my Food',
      description: 'Menu de restauration Sass',
      imageUrl: OhMyFood
    },
    {
      id: 3,
      title: 'Projet 724 Events',
      description: 'Débugguer un site web',
      imageUrl: Events724
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="project-slider">
      <div className="slider-container">
        <div className="slide">
          <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
        </div>
      </div>
      <div className="slider-controls">
        <button
          className={currentIndex === 0 ? 'disabled' : ''}
          onClick={() => handlePrevClick()}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slider-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button
          className={currentIndex === projects.length - 1 ? 'disabled' : ''}
          onClick={() => handleNextClick()}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;