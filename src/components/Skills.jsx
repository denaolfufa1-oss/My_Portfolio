import React from 'react';
import './Skills.css';


const skills = [
  { icon: '🟢', label: 'Node.js' },
  { icon: '⚛️', label: 'React' },
  { icon: '🚂', label: 'Express.js' },
  { icon: '🗄️', label: 'PostgreSQL' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🔥', label: 'MySQL' },
  { icon: '🎨', label: 'HTML/CSS' },
  { icon: '💛', label: 'JavaScript' },
  { icon: '🐙', label: 'Git/GitHub' },
  { icon: '🐳', label: 'Docker' },
  { icon: '☁️', label: 'Netlify' },
  { icon: '🔌', label: 'REST APIs' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">02 — Skills</div>

      {/* ✏️ EDIT: Change heading and subtitle */}
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-sub">Technologies I work with to bring ideas to life.</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-pill" key={skill.label}>
            <span className="skill-icon">{skill.icon}</span>
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
}
