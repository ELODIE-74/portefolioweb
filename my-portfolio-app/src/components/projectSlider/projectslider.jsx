import React, { useState, useEffect } from 'react';

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState({});

  useEffect(() => {
    const intervals = {};
    projects.forEach((project) => {
      intervals[project.id] = setInterval(() => {
        setCurrentIndex((prevIndex) => ({
          ...prevIndex,
          [project.id]: (prevIndex[project.id] + 1) % project.images.length,
        }));
      }, 5000);
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [projects]);

  const handlePrevClick = (id) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [id]: (prevIndex[id] - 1 + prevIndex[id].length) % prevIndex[id].length,
    }));
  };

  const handleNextClick = (id) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [id]: (prevIndex[id] + 1) % prevIndex[id].length,
    }));
  };

  const handleDotClick = (id, index) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [id]: index,
    }));
  };

  return (
    <div className="project-slider-container">
      {projects.map((project) => (
        <div key={project.id} className="project-slider">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex[project.id] ? 'active' : ''}`}
            >
              <img src={image} alt={`${project.title} Image ${index + 1}`} />
            </div>
          ))}
          <div className="slider-controls">
            <div className="prev-btn" onClick={() => handlePrevClick(project.id)}>
              &#10094;
            </div>
            <div className="next-btn" onClick={() => handleNextClick(project.id)}>
              &#10095;
            </div>
            <div className="slider-dots">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex[project.id] ? 'active' : ''}`}
                  onClick={() => handleDotClick(project.id, index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSlider;