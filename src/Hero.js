import React from 'react';
import './App.css';
// import Avatar from './img/kava.png'
import gridBG from './img/grid-bg.svg'
import leaf from './img/greens.png'


import Avatar from './img/Avatar.gif';


const Hero = () => {
  
  return (
    <section className="bg-cover bg-center bg-no-repeat relative" id="home">
      <div className='h-[700px] mt-4 md:mt-0 lg:h-[100vh] hero-section relative z-10'>
        <div className='bg-grid absolute t-0  w-[100vw] h-full -z-10 opacity-50'style={{ backgroundImage: `url(${gridBG})` }} ></div>
        <div className='bg-leaf absolute w-[100vw] h-full z-20 pointer-events-none' >
          <div className='relative w-[100vw] h-full flex flex-row justify-between'>
        <div className='w-[50px] md:w-[5vw] lg:w-[12vw]  transform scale-x-[-1] scale-y-[-1] h-full right-0 top-0' style={{ backgroundImage: `url(${leaf})`, backgroundSize: 'cover' }}></div>
        <div className='w-[50px] md:w-[5vw] lg:w-[12vw]  h-full right-0 top-0' style={{ backgroundImage: `url(${leaf})`, backgroundSize: 'cover' }}></div>
        </div>
        </div>

      <div className="flex flex-col gap-4 md:gap-6 montserrat-bold text-center sm:text-center md:text-left mx-auto md:mx-0 md:ml-8 lg:ml-16 ">
        
        <h1 className='text-5xl tracking-tighter md:tracking-normal md:text-7xl flex flex-col'><span className='text-3xl pr-4'>Hi I'm</span><span className="block sm:inline sm:mb-2">Kavya Manoj</span></h1>
        {/* <h3 className='text-xl text-center md:text-left'><span>UIUX Designer | </span><span>Glasgow</span></h3> */}
        <p className='montserrat-regular text-sm md:text-lg max-w-[280px] text-justify md:text-left md:max-w-lg md:leading-7 z-10'>
        I’m a UI/UX Designer based in Glasgow,  passionate about crafting thoughtful, accessible, and engaging designs that make a difference. I have a keen eye for aesthetics and a love for storytelling. I dive deep into understanding users' needs and emotions to create intuitive and impactful experiences. </p>
        <button className="cta-button" onClick={() => window.location.href = 'mailto:kavyamanojj@gmail.com'}>
          <span>👋</span> <span>Say Hello</span></button>
      </div>
      
      <div className="hero-image w-full md:h-full flex items-center justify-center">
      <img className='w-[250px] md:w-full' src={Avatar} alt="Kavya"></img>
    </div>
    
      </div>
    </section>
  );
}

export default Hero;
