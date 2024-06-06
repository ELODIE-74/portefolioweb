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
      technologies: 'HTML / CSS/ GITHUB',
      difficulties: 'Adapter le contenu sur différents supports (tablette/ desktop/smartphone)notamment en responsive.Basculement des éléments suivant les supports ',
      positives: 'Apprentissage et découverte du responsive',
    },
    {
      title: 'OH my food',
      context: 'Le client souhaite développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques.',
      technologies: ' HTML / CSS/ ANIMATIONS CSS/ SASS/ GITHUB ',
      difficulties: 'Compréhension de Sass, univers de la restauration',
      positives: 'Découverte de Sass, de la réalisation de transition CSS comme un loader de chargement.'
    },
    {
        title: 'Print JS',
        context: 'Le client, ici une imprimerie familial veut dynamiser son site statique.',
        technologies: 'Javascript/ GITHUB .',
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
        context: 'Le client Kasa, agence de location immobilière souhaite une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.',
        technologies: 'Node.js / React/ Javascript/ GITHUB .',
        difficulties: 'Découverte du server avec la gestion du backend, découverte de React',
        positives: 'React et ses dépendances (librairie).'
      },
      {
        title: 'Nina Carducci',
        context: 'Faire un audit du site de la cliente, ici une photographe, pour améliorer son référencement dans les moteurs de recherches.',
        technologies: 'Console/ Lighthouse/ wave/  Rich Snippet Google/ metas OpenGraph pour Facebook, et les Twitter Cards/ Schema.org.',
        difficulties: 'Comprendre et bien utliser les nouveaux outils.',
        positives: 'Référencement SEO, outils de Google.'
      },
      {
        title: '724 events',
        context: 'Le client ici est une agence média qui souhaite publier la nouvelle version de son site vitrine one-page. Le problème ici le site à plusieurs problèmes à résoudre.',
        technologies: 'React devtools/la console/ outils de debug/ GITHUB ',
        difficulties: 'Recenser toutes les erreurs, trouver et comprendre ces erreurs puis appliquer la solution adéquate.',
        positives: 'Savoir déboguer du code.'
      },
      {
        title: 'Portfolio Sophie Bluel',
        context: 'Le client ici est Archiwebos qui travaille sur le site du portfolio Sophie Bluel, architecte. Un kanban avec les fonctionnalités à implémenter',
        technologies: 'Node.JS / npm/ Javascript/ GITHUB/ Swagger/ API',
        difficulties: 'Découverte et compréhension de swagger pour la gestion de la base de données et de sa mise a jour.',
        positives: 'Découvertes de nouvelles approches pour dynamiser un site et la gestion des intéractions des utlisateurs.'
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