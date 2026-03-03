import React from 'react';
import './Projects.css';
import evangadiImg from "../assets/evangadi.jpg";
import amazonImg from "../assets/amazon.jpg";
import netflixImg from "../assets/netflix.jpeg";


const projects = [
  {
    id: "01",
    title: "Evangadi Forum",
    badge: "Full Stack",
    url: "https://bejewelled-torte-5871b3.netlify.app/",
    image: evangadiImg, // ✏️ Replace null with your imported image
    description:
      "A community Q&A forum platform where users can ask questions, post answers, and engage in discussions. Built with authentication and real-time data.",
    tags: ["React", "Node.js", "MySQL", "Express", "JWT Auth"],
  },
  {
    id: "02",
    title: "Amazon Clone",
    badge: "E-Commerce",
    url: "https://gregarious-malasada-9133b1.netlify.app/",
    image: amazonImg, // ✏️ Replace null with your imported image
    description:
      "A feature-rich e-commerce clone with product listings, shopping cart, and checkout flow — replicating the core Amazon shopping experience.",
    tags: ["React", "Node.js", "Context API", "CSS"],
  },
  {
    id: "03",
    title: "Netflix Clone",
    badge: "Frontend",
    url: "https://denaolfufa1-oss.github.io/Netflix-clone1/",
    image: netflixImg, // ✏️ Replace null with your imported image
    description:
      "A pixel-perfect Netflix UI clone with responsive design, movie browsing, and modern streaming service aesthetics.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Projects</div>

      {/* ✏️ EDIT: Change heading and subtitle */}
      <h2 className="section-title">Featured Work</h2>
      <p className="section-sub">
        Real-world projects built with care and attention to detail.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Image banner */}
            <div className="project-preview">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              ) : (
                /* Placeholder shown until you add a real image */
                <div className="project-img-placeholder">
                  <span className="placeholder-icon">🖼️</span>
                  <span className="placeholder-text">
                    Add image in Projects.jsx
                  </span>
                </div>
              )}
              <div className="project-overlay" />
              <span className="project-badge">{project.badge}</span>
            </div>

            <div className="project-body">
              <div className="project-num">{project.id}</div>
              <div className="project-title">{project.title}</div>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag-small" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

