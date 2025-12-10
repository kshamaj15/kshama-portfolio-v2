import React, { useEffect, useRef, useState } from 'react';
import { ABOUT_CONTENT } from '../../data/content';
import { SectionHeader } from '../../components/ui';
import './About.css';

const About = () => {
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
    <section id="about" className={`about ${isVisible ? 'about--visible' : ''}`} ref={sectionRef}>
      <div className="about__container">
        <SectionHeader
          number={1}
          title={ABOUT_CONTENT.title}
          subtitle={ABOUT_CONTENT.subtitle}
        />

        <div className="about__content">
          <div className="about__text">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about__image-wrapper" style={{ animationDelay: '0.4s' }}>
            <div className="about__image-container">
              <img
                src={ABOUT_CONTENT.image}
                alt="Kshama Jain"
                className="about__image"
              />
              <div className="about__image-overlay"></div>
            </div>
            <div className="about__image-border"></div>
          </div>
        </div>

        <div className="about__highlights">
          {ABOUT_CONTENT.highlights.map((item, index) => (
            <div
              key={index}
              className="about__highlight"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <span className="about__highlight-value">{item.value}</span>
              <span className="about__highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

