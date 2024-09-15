import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Hero from './Hero';
// import Skill from './Skill';
import Figma from './figma'
// import Footer from './footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <Skill /> */}
      <Figma />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
