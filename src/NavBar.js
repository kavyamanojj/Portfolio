

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
    <nav className="navbar absolute top-2 left-1/2 transform -translate-x-1/2 z-50">
      {/* <div className="navbar-logo">
      </div> */}
      <ul className="navbar-menu montserrat-bold p-2 outline outline-2 rounded-xl">
        <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a></li>
        <li><a href="#contact" onClick={openContactModal}>Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1gGuIJVpoxssUFnSPViq8ZYkPbLx8wUyT/view?usp=sharing" target="_blank"
        rel="noreferrer" className='mycv '>Resume</a></li>
      </ul>
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
    </nav>
  );
}

export default NavBar;