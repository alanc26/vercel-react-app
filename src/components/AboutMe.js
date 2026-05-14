import React from 'react';

const skills = ['Python', 'Java', 'C', 'PySpark', 'React', 'Flask', 'Django', 'SQL', 'PostgreSQL', 'Machine Learning'];

function AboutMe({ t }) {
  return (
    <section className="card">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutP1}</p>
      <p>{t.aboutP2}</p>
      <div className="skills">
        {skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
