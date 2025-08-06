import React from 'react';

function Projects() {
  const projectList = [
    {
      name: 'Linkedin',
      description: '',
      link: 'https://linkedin.com/in/achavez-v',
    },
  ];

  return (
    <section>
      <h2>Contáctame</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> – {project.description}
            <br />
            <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;