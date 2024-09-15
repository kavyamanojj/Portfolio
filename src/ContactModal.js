import React from 'react';
import './ContactModal.css';
import FaLinkedinIcon from './img/linkedin.webp';
import FaBehanceIcon from './img/behance.png';

function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="contact-info">
          <p>Email: <a href="mailto:kavyamanojj@gmail.com">kavyamanojj@gmail.com</a></p>
        </div>
        
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/kavyamanojj" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            <img src={FaLinkedinIcon} alt="LinkedIn" /> LinkedIn
          </a>
          <a href="https://www.behance.net/kavyamanoj" target="_blank" rel="noopener noreferrer" className="social-button behance">
            <img src={FaBehanceIcon} alt="Behance" /> Behance
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;