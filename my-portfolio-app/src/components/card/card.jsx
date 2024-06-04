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

