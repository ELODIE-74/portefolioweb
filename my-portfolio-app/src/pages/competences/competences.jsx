import React, { useState } from 'react';
import "./competences.css";

const SkillsPage = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const skills = [
    {
      title: 'Compétences techniques',
      items: [
        'Node.js server',
        'NPM',
        'GitHub',
        'Github Page',
        'HTML Web Architecture',
        'CSS Stylesheet',
        'Javascript Dynamism',
        'React Library create app',
        'Swagger API',
        'Redux',
        'Figma design mockup',
        'Browser Console',
        'Command Line Terminal',
      ],
    },
    {
      title: 'Gestion de projets',
      items: [
        'Trello',
        'Kanban',
        'UserStorie',
        'Storytelling',
        'Agile Management',
        'Pinterest (information monitoring)',
      ],
    },
    {
      title: 'SEO référencement',
      items: [
        'LightHouse audit',
        'wave',
        'Google Rich Snippet',
        'OpenGraph metas for Facebook, and Twitter Cards',
        'Schema.org',
      ],
    },
    {
      title: 'Debugging',
      items: ['React devtools chrome', 'Console.log'],
    },
  ];

  return (
    <div className="skills-container">
      {skills.map((section, index) => (
        <div
          key={index}
          className={`skill-section ${openSections.includes(index) ? 'open' : ''}`}
        >
          <div className="section-title" onClick={() => toggleSection(index)}>
            <h2>{section.title}</h2>
            <div className="toggle-icon">{openSections.includes(index) ? '▲' : '▼'}</div>
          </div>
          <div className="section-content">
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;