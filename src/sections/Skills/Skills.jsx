import React, { useEffect, useRef, useState } from 'react';
import { SKILLS_DATA } from '../../data/content';
import { SectionHeader } from '../../components/ui';
import './Skills.css';

const SkillBar = ({ name, level, delay, isVisible }) => {
  return (
    <div
      className="skill"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill__header">
        <span className="skill__name">{name}</span>
        <span className="skill__level">{level}%</span>
      </div>
      <div className="skill__bar">
        <div
          className="skill__progress"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay + 0.3}s`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`skills ${isVisible ? 'skills--visible' : ''}`} ref={sectionRef}>
      <div className="skills__container">
        <SectionHeader
          number={3}
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div className="skills__grid">
          {SKILLS_DATA.categories.map((category, catIndex) => (
            <div
              key={category.title}
              className="skills__category"
              style={{ animationDelay: `${0.2 + catIndex * 0.1}s` }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + catIndex * 0.1 + skillIndex * 0.05}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

