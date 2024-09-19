import React from "react";
import gridBG from './img/grid-bg.svg'

const skillData = [
  { 
    title: "User-centered design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#634a1c">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Ethical & accessible solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#634a1c">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Creative problem solving",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#634a1c">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    )
  },
  { 
    title: "Storytelling",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#634a1c">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    )
  },
];

const Skill = () => {
  return (
    <section className="container relative m-auto lg:h-[100vh] justify-center items-center flex flex-col px-[20px] md:px-0">
       <div className='bg-grid absolute t-0  w-[100vw] h-full -z-10 opacity-50'style={{ backgroundImage: `url(${gridBG})` }} ></div>
      <h1 className='text-5xl md:text-7xl montserrat-bold mb-10 '><span className="block sm:inline tracking-tighter md:tracking-normal text-center">The four pillars of my design</span></h1>
      <div className="grid grid-cols-1 md:h-[200px] md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {skillData.map(({ title, icon }, index) => (
          <div 
            key={index} 
            className="skill-box p-6 flex flex-col items-center justify-center rounded-2xl relative transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur border-2 border-dashed border-[#634a1c]"
          >
            <div className="text-blue-500 mb-4">{icon}</div>
            <h2 className="text-xl font-medium sm:text-2xl montserrat-bold text-center tracking-tighter md:tracking-normal">{title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;