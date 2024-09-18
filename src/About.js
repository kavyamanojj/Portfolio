import React from 'react';
import './App.css';
import kavs from './img/adventure2.png'
import uku from './img/uku.png'
import gridBG from './img/grid.svg'

// import Footer from './footer'

function About() {
  return (
    <section className="bg-cover bg-center bg-no-repeat" >
    <div className="About h-[100vh] relative ">
      <div className='bg-grid absolute t-0 w-full h-full -z-10 opacity-50'style={{ backgroundImage: `url(${gridBG})` }} ></div>
        
      <div className='flex flex-col md:flex-row gap-2 h-full justify-center'>
       
      <div className='md:w-1/2 text-lg montserrat-regular flex flex-col gap-2 justify-center'>
      <h1 className='text-5xl md:text-7xl montserrat-bold mb-10'><span className="block sm:inline ">About me</span></h1>
        
        <p>I love creating experiences that connects with people on a deeper level whether its sketching ideas on paper or bringing them to life on a screen . I have a natural curiosity that always pushes me to explore, investigate and learn what I don’t know. This is also reflected in my personality as a designer.</p>
        <p>Art and creativity started early in my life , from doodling in my notebooks during school lectures to performing on stage as a theatre artist , which has evolved me into a career that blends storytelling an design. </p>
        <p>My designs are deeply inspired by nature and the people around me. Growing up in India, with its diverse landscapes, has profoundly shaped how I see and create. </p>
        
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'><img src={kavs} alt="Portfolio preview" className='' /></div>
       


      </div>
    </div>
    <div className="About h-[100vh] relative ">
      <div className='bg-grid absolute t-0 w-full h-full -z-10 opacity-50'style={{ backgroundImage: `url(${gridBG})` }} ></div>
        
      <div className='flex flex-col md:flex-row md:gap-10 h-full justify-center'>
      <div className='md:w-1/2 flex flex-col justify-center '><img src={uku} alt="Portfolio preview" className='rounded-full' /></div>
       
      <div className='md:w-1/2 text-lg montserrat-regular flex flex-col gap-2 justify-center'>
        
       
        <p>My journey began with a Bachelor’s in Mass Communication and Journalism, where I was fascinated by how media can both bring people together and create divides. This insight inspired me to believe that creation is a powerful way for individuals to express themselves and make meaningful contributions toward a more beautiful world.</p>
        <p>At McKinsey & Company, I mastered the art of design precision—perfect formatting, alignment, and structure. But I wanted more than just designing presentations for clients.</p>
        <p>I moved to Glasgow to pursue Master’s in User Experience and Interaction Design. It’s here that I’ve honed my skills and continued my journey of blending creativity with meaningful user-centered design.</p>
        <p>Now, I’m living , playing and creating in Glasgow </p>
        </div>
        
       


      </div>
    </div>
    </section>
  );
}

export default About;
