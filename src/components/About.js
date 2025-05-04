import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>

      <section className="profile">
        <h2>👨‍💻 Profile</h2>
        <p>
        Building full-stack apps using Java, React, Node.js, APIs & RESTful services.
        </p>
      </section>

      <section className="education">
        <h2>🎓 Education</h2>
        <p><strong>R.K. Talreja College</strong></p>
        <p>B.Sc. in Computer Science (2021-2024)</p>
      </section>

      <section className="skills">
        <h2>💻 Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> JavaScript (React, Node.js), Java, Python</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, REST APIs, JSON</li>
          <li><strong>Web Scraping:</strong> BeautifulSoup</li>
          <li><strong>Machine Learning:</strong> IrisML project</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
