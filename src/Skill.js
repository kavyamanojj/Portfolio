import React from 'react';
import './Skill.css';

function SkillItem({ title }) {
  return (
    <div className="skill-item">
      <h3>{title}</h3>
    </div>
  );
}

function Skill() {
  return (
    <section className="skills-section montserrat-regular">
      <SkillItem title="User-centered design" />
      <SkillItem title="Ethical & accessible solutions" />
      <SkillItem title="Creative problem solving" />
      <SkillItem title="Storytelling" />
    </section>
  );
}

export default Skill;