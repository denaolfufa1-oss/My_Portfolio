import React from 'react';
import './Hero.css';
import photo from "../assets/denaol.png";


const PHOTO = photo; 


const stats = [
  { num: '3+',    label: 'Projects' },
  { num: 'Full',  label: 'Stack Dev' },
  { num: 'Node',  label: '.js Expert' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT — Text */}
      <div className="hero-text">
        {/* ✏️ EDIT: Tag line */}
        <div className="tag fade-up">Full Stack Developer</div>

        {/* ✏️ EDIT: Main heading */}
        <h1 className="fade-up-2">
          Hi, I'm<br />
          <span className="highlight">Denaol Fufa</span>
        </h1>

        {/* ✏️ EDIT: Description */}
        <p className="hero-desc fade-up-3">
          I'm a Node.js developer crafting scalable web apps from database to UI.
          Clean code, great UX, and performance-driven solutions.
        </p>

        <div className="cta-group fade-up-3">
          <a href="#projects" className="btn btn-primary">View Projects →</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>

        <div className="stats fade-up-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="photo-box">
        <div className="photo-frame">
          <div className="photo-placeholder">
            {PHOTO ? (
              <img src={PHOTO} alt="Denaol Fufa" />
            ) : (
              <>
                <div className="photo-icon">📷</div>
                <div>Your Photo Here</div>
                {/* ✏️ EDIT: import your photo at the top and set PHOTO = yourImport */}
                <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>
                  Set PHOTO variable at top of Hero.jsx
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
