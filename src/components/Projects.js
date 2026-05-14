import React from 'react';

const projects = [
  {
    name: 'G-Explorer',
    org: 'CR2 · Universidad de Chile',
    url: 'https://gexplorer.cr2.cl',
    tags: ['Next.js', 'React', 'NASA GPM', 'Data Viz', 'Django'],
    descEs: 'Plataforma web de búsqueda y visualización de datos satelitales de precipitación de la misión GPM (NASA/JAXA). Permite explorar coberturas satelitales por región y ventana temporal, y visualizar cortes verticales de reflectividad de radar en alta resolución.',
    descEn: 'Online search and visualization platform for satellite precipitation data from the GPM mission (NASA/JAXA). Allows users to explore satellite swaths by region and time window, and visualize vertical cross-sections of radar reflectivity at high resolution.',
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.867 0-2.154 1.459-2.154 2.966v5.702h-3v-11h2.88v1.503h.04c.401-.759 1.381-1.56 2.839-1.56 3.039 0 3.596 2.001 3.596 4.601v6.456z"/>
  </svg>
);

function Projects({ t }) {
  return (
    <>
      {/* Projects */}
      <section className="card">
        <h2>{t.projectsTitle}</h2>
        {projects.map((p, i) => (
          <div key={i} className="project-item">
            <div className="project-header">
              <div>
                <span className="project-name">{p.name}</span>
                <span className="project-org">{p.org}</span>
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                {t.visitProject} ↗
              </a>
            </div>
            <p className="project-desc">
              {t.projectsTitle === 'Proyectos' ? p.descEs : p.descEn}
            </p>
            <div className="skills">
              {p.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="card">
        <h2>{t.contactTitle}</h2>
        <ul>
          <li>
            <a href="https://linkedin.com/in/achavez-v" target="_blank" rel="noopener noreferrer" className="contact-link">
              <LinkedInIcon />
              <span>
                <strong>LinkedIn</strong>
                <span style={{ fontWeight: 300, opacity: 0.7, marginLeft: '0.4rem' }}>
                  — {t.linkedinDesc}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Projects;
