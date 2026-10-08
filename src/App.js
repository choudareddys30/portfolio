import React from 'react';
import './App.css';

const socialLinks = {
  youtube: 'https://www.youtube.com/channel/BuildAIwithCR',
  github: 'https://github.com/choudareddys30',
  linkedin: 'https://linkedin.com/in/choudareddys30'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chouda Reddy</h1>
        <p>Senior Quality Engineer | Python & AI Enthusiast</p>
      </header>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m Chouda Reddy, a Senior Quality Engineer with 5.7 years of experience, currently learning Python and AI to build end-to-end AI products. I hold an MCA from JNTUK.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card" tabIndex={0}>
          <h3>SENTINEL</h3>
          <p>An AI-focused project under development.</p>
          <button onClick={() => alert('More about SENTINEL coming soon!')}>Learn More</button>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Kubernetes (K8s)</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>5.7 years in quality engineering and ETL/data testing.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Phone: +91 8919969027</p>
        <p>
          YouTube: <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">Build AI with CR</a>
        </p>
        <p>
          GitHub: <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">choudareddys30</a>
        </p>
        <p>
          LinkedIn: <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">choudareddys30</a>
        </p>
      </section>
      
      <footer>
        <p>© 2026 Chouda Reddy</p>
      </footer>
    </div>
  );
}

export default App;