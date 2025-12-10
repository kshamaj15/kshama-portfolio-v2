import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../../data/content';
import { SectionHeader, Tag } from '../../components/ui';
import { LocationIcon } from '../../components/icons';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);
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

  useEffect(() => {
    const updateIndicator = () => {
      const tab = tabsRef.current[activeTab];
      if (tab) {
        setIndicatorStyle({
          height: `${tab.offsetHeight}px`,
          transform: `translateY(${tab.offsetTop}px)`,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  const activeExperience = EXPERIENCE_DATA[activeTab];

  return (
    <section id="experience" className={`experience ${isVisible ? 'experience--visible' : ''}`} ref={sectionRef}>
      <div className="experience__container">
        <SectionHeader
          number={2}
          title="Experience"
          subtitle="Where I've worked"
        />

        <div className="experience__content">
          {/* Tab List */}
          <div className="experience__tabs" role="tablist">
            <div className="experience__indicator" style={indicatorStyle}></div>
            {EXPERIENCE_DATA.map((exp, index) => (
              <button
                key={exp.id}
                ref={(el) => (tabsRef.current[index] = el)}
                role="tab"
                aria-selected={activeTab === index}
                className={`experience__tab ${activeTab === index ? 'experience__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div
            className="experience__panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeExperience.id}`}
          >
            <h3 className="experience__role">
              {activeExperience.role}{' '}
              <span className="experience__company">
                @ {activeExperience.company}
                {activeExperience.subtitle && (
                  <span className="experience__subtitle"> ({activeExperience.subtitle})</span>
                )}
              </span>
            </h3>

            <div className="experience__meta">
              <span className="experience__period">{activeExperience.period}</span>
              <span className="experience__location">
                <LocationIcon size={14} />
                {activeExperience.location}
              </span>
            </div>

            <ul className="experience__points">
              {activeExperience.points.map((point, index) => (
                <li key={index} className="experience__point">
                  {point}
                </li>
              ))}
            </ul>

            <div className="experience__tech">
              {activeExperience.technologies.map((tech) => (
                <Tag key={tech} variant="default" size="small">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

