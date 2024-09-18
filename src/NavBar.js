
import React from 'react';

import './App.css';
// You'll need to create this component

function NavBar() {


  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar absolute top-2 left-1/2 transform -translate-x-1/2 z-50">
      {/* <div className="navbar-logo">
      </div> */}
      <ul className="navbar-menu montserrat-bold p-2 outline outline-2 rounded-xl">
        <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="https://drive.google.com/file/d/11dOjXYPGAVRZXlQJiCH4fGDdQ1ZcGJrM/view?usp=sharing" target="_blank"
        rel="noreferrer" className='mycv flex flex-row'>Resume</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;