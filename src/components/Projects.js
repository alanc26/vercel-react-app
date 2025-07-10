import React from 'react';

function Projects() {
  const projectList = [
    {
      name: 'Portfolio Website',
      description: 'soon.',
      link: 'https://google.com',
    },
    {
      name: 'Task Tracker App',
      description: 'soon',
      link: 'https://google.com',
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
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