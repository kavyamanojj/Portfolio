

import React, { useState } from 'react';
import './App.css';
import ContactModal from './ContactModal'; // You'll need to create this component

function NavBar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" className='montserrat-regular'>k.</a>
      </div>
      <ul className="navbar-menu montserrat-bold">
        <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a></li>
        <li><a href="#contact" onClick={openContactModal}>Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1gGuIJVpoxssUFnSPViq8ZYkPbLx8wUyT/view?usp=sharing" target="_blank"
        rel="noreferrer" className='mycv '>CV</a></li>
      </ul>
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
    </nav>
  );
}

export default NavBar;