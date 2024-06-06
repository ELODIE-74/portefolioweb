import React from 'react';
import './projets.css';
const ProjectCard = ({ title, context, technologies, difficulties, positives }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
      </div>
      <div className="project-card-content">
        <p><strong>Contexte :</strong> {context}</p>
        <p><strong>Technologies :</strong> {technologies}</p>
        <p><strong>Difficultés :</strong> {difficulties}</p>
        <p><strong>Points positifs :</strong> {positives}</p>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Booki',
      context: 'Le client souhaite développer un site web qui permettra à ses usagers de trouver des hébergements et activités dans la ville de leur choix',
      technologies: 'HTML / CSS',
      difficulties: 'Adapter le contenu sur différents supports (tablette/ desktop/smartphone)notamment en responsive.Basculement des éléments suivant les supports ',
      positives: 'Apprentissage et découverte du responsive',
    },
    {
      title: 'OH my food',
      context: 'Le client souhaite développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques.',
      technologies: ' HTML / CSS/ ANIMATIONS CSS/ SASS',
      difficulties: 'Compréhension de Sass, univers de la restauration',
      positives: 'Découverte de Sass, de la réalisation de transition CSS comme un loader de chargement.'
    },
    {
        title: 'Print JS',
        context: 'Le client, ici une imprimerie familial veut dynamiser son site statique.',
        technologies: 'Javascript.',
        difficulties: 'Passer du statique au dynamique.',
        positives: 'Découverte et mise en place du javascript.'
      },
      {
        title: 'Qwenta',
        context: 'Le client Qwenta souhaite développer un "Menu Maker". Un site permettant aux restaurateurs de mettre en ligne leurs menus en quelques clics',
        technologies: 'Trello / Kanban/ PowwerPoint/ LibreOffice/ Google Analytic.',
        difficulties: 'Découpage des tâches dans Trello, estimer le temps, les moyens a déployer, la gestion du projet.',
        positives: 'Découverte de la gestion agile.'
      },
      {
        title: 'Kasa',
        context: 'Description du contexte et des objectifs du projet 2.',
        technologies: 'Liste des technologies utilisées pour le projet 2.',
        difficulties: 'Défis rencontrés et comment ils ont été surmontés pour le projet 2.',
        positives: 'Éléments réussis ou valeur ajoutée du projet 2.'
      },
      {
        title: 'Nina Carducci',
        context: 'Description du contexte et des objectifs du projet 2.',
        technologies: 'Liste des technologies utilisées pour le projet 2.',
        difficulties: 'Défis rencontrés et comment ils ont été surmontés pour le projet 2.',
        positives: 'Éléments réussis ou valeur ajoutée du projet 2.'
      },
      {
        title: '724 events',
        context: 'Description du contexte et des objectifs du projet 2.',
        technologies: 'Liste des technologies utilisées pour le projet 2.',
        difficulties: 'Défis rencontrés et comment ils ont été surmontés pour le projet 2.',
        positives: 'Éléments réussis ou valeur ajoutée du projet 2.'
      },
      {
        title: 'Portfolio Sophie Bluel',
        context: 'Description du contexte et des objectifs du projet 2.',
        technologies: 'Liste des technologies utilisées pour le projet 2.',
        difficulties: 'Défis rencontrés et comment ils ont été surmontés pour le projet 2.',
        positives: 'Éléments réussis ou valeur ajoutée du projet 2.'
      },
  ];

  return (
    <div className="container">
      <h1>Mes Projets</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            context={project.context}
            technologies={project.technologies}
            difficulties={project.difficulties}
            positives={project.positives}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;