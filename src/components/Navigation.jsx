import React from 'react';
import "./Navigation.css";
import "./ComponentStyles.css";
const Navigation = ({ onLogoClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Dreamy Poetics
        </a>
        <div className="nav-links">
          <a href="#poems" onClick={e => {
            e.preventDefault();
            const el = document.getElementById('poems');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Poems</a>
          <a href="#about" onClick={e => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

