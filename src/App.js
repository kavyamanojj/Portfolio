import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import './App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Skill from './Skill';
import Figma from './figma';
import About from './About';

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })


  return (
    <ReactLenis root>
    <div className="App">
      <NavBar />
      <Hero />
      <Skill />
      <Figma />
      <About />
    </div>
    </ReactLenis>
  );
}

export default App;