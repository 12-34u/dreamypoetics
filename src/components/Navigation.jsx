import React from 'react';
import "./Navigation.css";
import "./ComponentStyles.css";
const Navigation = ({ onLogoClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); onLogoClick(); }}>
          Dreamy Poetics
        </a>
        <div className="nav-links">
          <a href="#poems">Poems</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

