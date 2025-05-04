import React, { useState } from 'react';
import './Projects.css';

const allProjects = {
  React: [
    "accordion FAQ",
    "dark-mode",
    "navbar",
    "pagination demo",
  ],
  "Node.js": [
    "binarySearch and Bubble Sort",
    "Navbar for Exploring Plants (Coconut, Edibles, Old Discoveries, Red Flowers)",
    "(add, edit, delete text), (upload, delete video)",
    "Users upload or view images, text",
    "View Items by Category",
    "Video Gallery Website",
    "calculate BMI, Age, Interest,Length,EMI,Temp",
    "(play songs with keys or mouse) (related images on buttons)",
  ],
  Python: [
    "IrisML model predicts flower types",
  ],
  Java: [
    "Daily Expense Tracker (Java + JSON)",
    "Daily Expense Tracker (Java + MongoDB)",
    "Bank System",
    "Calculator",
    "Chatbot (if-else logic & string matching)",
    "Shopkeeper Console App - Register customers, record/view orders",
    "Library Management System (JSON file)",
    "Task Manager CLI (Java + JSON)",
    "Contact Management App (Java + JSON)",
  ],
};

const Projects = () => {
  const categories = Object.keys(allProjects);
  const [selectedCategory, setSelectedCategory] = useState('React');

  return (
    <div className="projects-page">
      <h1 className="title">Projects</h1>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="project-list">
        {allProjects[selectedCategory].map((project, index) => (
          <li key={index}>
            {project.includes('https://') ? (
              <span dangerouslySetInnerHTML={{ __html: project.replace(/(https:\/\/[^\s]+)/, `<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>`) }} />
            ) : (
              project
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
