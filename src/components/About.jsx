import React from 'react';
import './About.css';


const devData = {
  name:      'Denaol Fufa',
  role:      'Full Stack Developer',
  specialty: 'Node.js & React',
  passion:   'Building scalable web apps',
  stack:     ['Node.js', 'Express', 'React', 'PostgreSQL', 'MySQL', 'MongoDB'],
  status:    'Open to opportunities',
  coffee:    true,
};

export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>

      {/* ✏️ EDIT: Change heading and subtitle */}
      <h2 className="section-title">Who Am I</h2>
      <p className="section-sub">
        A passionate full stack developer who loves building things that live on
        the internet.
      </p>

      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title">developer.json</span>
        </div>
        <div className="terminal-body">
          <div>
            <span className="t-prompt">$ </span>
            <span className="t-cmd">cat developer.json</span>
          </div>
          <div>&nbsp;</div>
          <div>{"{"}</div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"name"</span>:{" "}
            <span className="t-string">"{devData.name}"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"role"</span>:{" "}
            <span className="t-string">"{devData.role}"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"specialty"</span>:{" "}
            <span className="t-string">"{devData.specialty}"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"passion"</span>:{" "}
            <span className="t-string">"{devData.passion}"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"stack"</span>: [
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {devData.stack.map((s, i) => (
              <span key={s}>
                <span className="t-string">"{s}"</span>
                {i < devData.stack.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
          <div>&nbsp;&nbsp;],</div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"status"</span>:{" "}
            <span className="t-string">"{devData.status}"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="t-key">"coffee"</span>:{" "}
            <span className="t-string">{String(devData.coffee)}</span>
          </div>
          <div>{"}"}</div>
          <div>&nbsp;</div>
          {/* ✏️ EDIT: Change this comment */}
          <div>
            <span className="t-comment">
              {"// Always learning, always building"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
