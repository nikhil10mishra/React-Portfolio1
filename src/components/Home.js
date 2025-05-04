import React from 'react';
import PaginationDemo from './PaginationDemo';
import './Home.css'; // Optional CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="intro-section">
        <h1>Hi, I'm Nikhil Mishra 👨‍💻</h1>
        <p className="headline">
        Full-stack: JS, React, Node.js, Java.
        </p>
        <p className="subtext">
        Responsive UI, REST API integration.
        </p>
      </header>

      <section className="project-section">
        <h2>🚀 Featured Projects</h2>
        <PaginationDemo />
        <p className="more-projects-link">
          View more on the <a href="/projects">Projects page</a>.
        </p>
      </section>

      <section className="connect-section">
        <h2>📬 Let’s Connect</h2>
        <p>
          Have a question or want to collaborate? <a href="/contact">Reach out here</a>.
        </p>
      </section>
    </div>
  );
};

export default Home;
