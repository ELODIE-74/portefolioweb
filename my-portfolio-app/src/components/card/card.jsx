import React from 'react';
import projectsData from '../../data/projets.json';
import './card.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {project.githubPageLink && (
        <a href={project.githubPageLink} target="_blank" rel="noopener noreferrer">
          GitHub Page
        </a>
      )}
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Mes Projets</h1>
      <ProjectList />
    </div>
  );
};

export default App;
/*import React from 'react';
import projectsData from '../../data/projets.json';
import './card.css';

// Importer les images de chaque projet
import Project724Images from '././724Events_images/724_events_1.png';
import BookiImages from '././Booki_images/Booki_1.png';
import OhmyfoodImages from '././Ohmyfood_images/ohmyfood_1.png';

const ProjectCard = ({ project }) => {
  let images;
  switch (project.id) {
    case '724':
      images = Project724Images;
      break;
    case 'booki':
      images = BookiImages;
      break;
    case 'ohmyfood':
      images = OhmyfoodImages;
      break;
    default:
      images = [];
  }
  return (
    <div className="project-card">
      <img src={images[0]} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {project.githubPageLink && (
        <a href={project.githubPageLink} target="_blank" rel="noopener noreferrer">
          GitHub Page
        </a>
      )}
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Mes Projets</h1>
      <ProjectList />
    </div>
  );
};

export default App;*/
/*import React from 'react';
import projectsData from '../../data/projets.json';
import './card.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {project.githubPageLink && (
        <a href={project.githubPageLink} target="_blank" rel="noopener noreferrer">
          GitHub Page
        </a>
      )}
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Mes Projets</h1>
      <ProjectList />
    </div>
  );
};

export default App;
 */
