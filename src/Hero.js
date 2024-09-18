import React from 'react';
import './App.css';
// import Avatar from './img/kava.png'
import gridBG from './img/grid.svg'
import leaf from './img/greens.png'


import Avatar from './img/Avatar.gif';


const Hero = () => {
  
  return (
    <section className="bg-cover bg-center bg-no-repeat" >
      <div className='h-[700px] md:h-[100vh] hero-section relative z-10'>
        <div className='bg-grid absolute t-0 w-[100vw] h-full -z-10 opacity-50'style={{ backgroundImage: `url(${gridBG})` }} ></div>
        <div className='bg-leaf absolute w-[100vw] h-full z-20'>
          <div className='relative w-[100vw] h-full flex flex-row justify-between'>
        <div className='w-[50px] md:w-[5vw] lg:w-[12vw]  transform scale-x-[-1] scale-y-[-1] h-full right-0 top-0' style={{ backgroundImage: `url(${leaf})`, backgroundSize: 'cover' }}></div>
        <div className='w-[50px] md:w-[5vw] lg:w-[12vw]  h-full right-0 top-0' style={{ backgroundImage: `url(${leaf})`, backgroundSize: 'cover' }}></div>
        </div>
        </div>

      <div className="flex flex-col gap-2 lg:gap-5 montserrat-bold text-center sm:text-center md:text-left mx-auto md:mx-0 md:ml-8 lg:ml-16 ">
        
        <h1 className='text-5xl md:text-7xl'><span className='pr-4'>Hi I'm</span><span className="block sm:inline sm:mb-10">Kavya Manoj</span></h1>
        {/* <h3 className='text-xl text-center md:text-left'><span>UIUX Designer | </span><span>Glasgow</span></h3> */}
        <p className='montserrat-regular text-base md:text-lg max-w-lg leading-7'>
        I’m a UI/UX Designer based in Glasgow,  passionate about crafting thoughtful, accessible, and engaging designs that make a difference. I have a keen eye for aesthetics and a love for storytelling. I dive deep into understanding users' needs and emotions to create intuitive and impactful experiences. </p>
        <button className="cta-button" onClick={() => window.location.href = 'mailto:kavyamanojj@gmail.com'}>
          <span>👋</span> <span>Say Hello</span></button>
      </div>
      
      <div className="hero-image w-full h-full flex items-center justify-center">
      <img src={Avatar}></img>
    </div>
    
      </div>
    </section>
  );
}

export default Hero;
