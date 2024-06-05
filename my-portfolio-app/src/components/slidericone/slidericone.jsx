import React, { useState, useEffect } from 'react';

import "./slidericone.css";

const TechSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const technologies = [
    { icon: <i className="fa-brands fa-js-square"></i>, name: 'JavaScript' },
    { icon: <i className="fa-brands fa-html5"></i>, name: 'HTML' },
    { icon: <i className="fa-brands fa-css3-alt"></i>, name: 'CSS' },
    { icon: <i className="fa-brands fa-trello"></i>, name: 'Trello' },
    { icon: <i className="fa-brands fa-kanban"></i>, name: 'Kanban' },
    { icon: <i className="fa-brands fa-sass"></i>, name: 'Sass' },
    { icon: <i className="fa-brands fa-redux"></i>, name: 'Redux' },
    { icon: <i className="fa-brands fa-redux-square"></i>, name: 'Redux Toolkit' },
    { icon: <i className="fa-brands fa-ai"></i>, name: 'AI' },
    { icon: <i className="fa-brands fa-code"></i>, name: 'VSCode' },
    { icon: <i className="fa-brands fa-code-branch"></i>, name: 'Git' },
    { icon: <i className="fa-brands fa-github"></i>, name: 'GitHub' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="tech-slider">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`tech-item ${index === currentIndex ? 'active' : ''}`}
        >
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechSlider;