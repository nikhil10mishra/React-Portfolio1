import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Importing useLocation hook

const Navbar = () => {
  const location = useLocation(); // Get the current location (path)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
