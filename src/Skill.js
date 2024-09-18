import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skillTitles = [
  "User-centered design",
  "Ethical & accessible solutions",
  "Creative problem solving",
  "Storytelling",
];

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const boxes = sectionRef.current.querySelectorAll('.skill-box');
    
    boxes.forEach((box) => {
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(box, {
        backgroundPosition: '20px 0, 20px 100%, 0 20px, 100% 20px',
        duration: 1,
        ease: 'linear'
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="grid grid-cols-1 md:h-[300px] md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {skillTitles.map((title, index) => (
        <div 
          key={index} 
          className="skill-box p-4 flex items-center justify-center rounded-2xl relative"
          style={{
            background: `
              linear-gradient(to right, black 50%, transparent 50%) repeat-x,
              linear-gradient(to right, black 50%, transparent 50%) repeat-x,
              linear-gradient(to bottom, black 50%, transparent 50%) repeat-y,
              linear-gradient(to bottom, black 50%, transparent 50%) repeat-y
            `,
            backgroundSize: '20px 2px, 20px 2px, 2px 20px, 2px 20px',
            backgroundPosition: '0 0, 0 100%, 0 0, 100% 0',
            backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y'
          }}
        >
          <h2 className="text-xl font-medium sm:text-2xl montserrat-bold text-center">{title}</h2>
        </div>
      ))}
    </section>
  );
};

export default Skill;