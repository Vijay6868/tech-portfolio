// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Vijay Kumar</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/">Home</Link></li>
          <li className="header__nav-item"><Link to="/resume">Resume</Link></li>
          <li className="header__nav-item"><Link to="/projects">Projects</Link></li>
          <li className="header__nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;