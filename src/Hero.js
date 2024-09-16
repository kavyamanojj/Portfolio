import React from 'react';
import './App.css';
import Avatar from './img/kava.png'
import gridBG from './img/grid.svg'

function Hero() {
  return (
    <section className="hero-section h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${gridBG})` }} >
      <div className="hero-content montserrat-bold">
        <h2 className="montserrat-regular">Hi I'm</h2>
        <h1>Kavya Manoj | UIUX Designer | Glasgow</h1>
        <p className='montserrat-regular'>Crafting ethical, accessible designs with purpose and empathy</p>
        <button className="cta-button" onClick={() => window.location.href = 'mailto:kavyamanojj@gmail.com'}>
          <span>👋</span> <span>Say Hello</span></button>
      </div>
      <div className="hero-image">
        <img src={Avatar} alt="Portfolio preview" />
      </div>
    </section>
  );
}

export default Hero;
