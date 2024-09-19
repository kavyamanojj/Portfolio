import React from 'react';
import { ReactLenis } from 'lenis/react'
import './App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Skill from './Skill';
import Figma from './figma';
import About from './About';

function App() {
 

  return (
    <ReactLenis root>
        <NavBar />
    <div className="App">
      <Hero />
      <Skill />
      <Figma />
      <About />
    </div>
    </ReactLenis>
  );
}

export default App;