import React from 'react';
import toteBags from './img/tote-bags.png';
import hopOn from './img/hop-on.png';
import actGlasgow from './img/act-glasgow.png';
import ArrowUpRightIcon from './img/arrow-up-right.svg';
import './figma.css';

const myProjects = [
  {
    id: "toteBags",
    subhead: "Design Style",
    title: "Tote Bags",
    description: "A personal project inspired by my love for tote bags",
    figmaUrl: "https://www.figma.com/proto/GqBvgKIJMCZmtWsszwgnBI/Portfolio-Design?node-id=381-1182&t=FViXKlMqXxtLM3d7-1&hide-ui=1",
    color: "#EB9649",
    image: toteBags,
  },
  {
    id: "hopOn",
    subhead: "UX Case Study",
    title: "HopOn",
    description: "A detailed case study following the Double Diamond method, covering user research, competitor analysis, and wireframing.",
    figmaUrl: "https://www.figma.com/proto/GqBvgKIJMCZmtWsszwgnBI/Portfolio-Design?node-id=381-1172&t=FViXKlMqXxtLM3d7-1&hide-ui=1",
    image: hopOn,
    color: "#2B7A8B",
  },
  {
    id: "actGlasgow",
    subhead: "Emotion-Driven Design",
    title: "ACT Glasgow",
    description: "A design and redesign project, both crafted to explore and compare how different design approaches convey user emotions.",
    figmaUrl: "https://www.figma.com/proto/GqBvgKIJMCZmtWsszwgnBI/Portfolio-Design?node-id=381-1173&t=FViXKlMqXxtLM3d7-1&hide-ui=1",
    image: actGlasgow,
    color: "#FCAEA2", 
  },
];

function FigmaPrototype() {
  return (
    <section className="container m-auto figma-section mb-10" id="work">
      <h1 className='text-5xl md:text-7xl montserrat-bold mb-10 text-center tracking-tighter md:tracking-normal'><span className="block sm:inline">Projects</span></h1>
      <div className="flex flex-col gap-8 md:pt-8">
        {myProjects.map((project, index) => (
          <div key={index} className="rounded-3xl md:h-[600px] p-8 sticky top-16 overflow-clip" style={{ backgroundColor: project.color, top:`calc( 64px + ${index * 40}px)` }}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 h-full">
              <div className="lg:pb-16 flex flex-col justify-center">
                <div className="inline-flex gap-2 text-white montserrat-regular text-md ">
                  <span>{project.subhead}</span>
                </div>
                <h3 className="montserrat-bold text-white text-2xl md:mt-5 md:text-5xl">{project.title}</h3>
                {/* <hr className="border-t-2 border-white/5 mt-4 md:mt-5" /> */}
                <p className="mt-4 md:mt-5 text-sm md:text-base montserrat-regular  text-white/90">{project.description}</p>
                <a 
                  href={project.figmaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-gray-950 h-12 w-full md:w-fit px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 -mb-4"
                >
                  <span>View on Figma</span>
                  <img src={ArrowUpRightIcon} alt="arrow-up-right" className="w-4 h-4" />
                </a>
              </div>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="m-auto mt-8 -mb-4 md:-mb-0 rounded-2xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FigmaPrototype;