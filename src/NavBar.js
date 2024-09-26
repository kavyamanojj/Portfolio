
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
    <div className="flex justify-center item-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-black/50 rounded-xl bg-white/10 backdrop-blur montserrat-regular">
        <button onClick={(e) => scrollToSection(e, 'home')} className="nav-item cursor-pointer">Home</button>
        <button onClick={(e) => scrollToSection(e, 'work')} className="nav-item cursor-pointer">Projects</button>
        <button onClick={(e) => scrollToSection(e, 'about')} className="nav-item cursor-pointer">About</button>
        <a href="https://drive.google.com/file/d/1ilou_yiRzLE-SysCPgukNvpltdADuizc/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-item bg-black text-white/90 hover:bg-[#634a1c] hover:text-white flex flex-row gap-2"><span>Resume</span></a>
      </nav>
    </div>
  );
}
  //   <nav className="navbar absolute top-2 left-1/2 transform -translate-x-1/2 z-50">
   
  //   <ul className="navbar-menu montserrat-bold p-2 outline outline-2 rounded-xl">
  //     <li><a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a></li>
  //     <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
  //     <li><a href="https://drive.google.com/file/d/11dOjXYPGAVRZXlQJiCH4fGDdQ1ZcGJrM/view?usp=sharing" target="_blank"
  //     rel="noreferrer" className='mycv flex flex-row'>Resume</a></li>
  //   </ul>
  // </nav>
  // );


export default NavBar;
