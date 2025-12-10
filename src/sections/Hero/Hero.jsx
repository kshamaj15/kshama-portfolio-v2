import React, { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../../data/content';
import { Button } from '../../components/ui';
import { ArrowRightIcon, ExternalLinkIcon } from '../../components/icons';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'hero--visible' : ''}`}>
      <div className="hero__content">
        <p className="hero__greeting" style={{ animationDelay: '0.1s' }}>
          {HERO_CONTENT.greeting}
        </p>

        <h1 className="hero__name" style={{ animationDelay: '0.2s' }}>
          {HERO_CONTENT.name}
        </h1>

        <h2 className="hero__tagline" style={{ animationDelay: '0.3s' }}>
          {HERO_CONTENT.tagline}
        </h2>

        <p className="hero__description" style={{ animationDelay: '0.4s' }}>
          {HERO_CONTENT.description}
        </p>

        <div className="hero__cta" style={{ animationDelay: '0.5s' }}>
          <Button
            href={HERO_CONTENT.cta.primary.href}
            variant="primary"
            icon={<ArrowRightIcon size={16} />}
          >
            {HERO_CONTENT.cta.primary.text}
          </Button>
          <Button
            href={HERO_CONTENT.cta.secondary.href}
            variant="secondary"
            external={HERO_CONTENT.cta.secondary.external}
            icon={<ExternalLinkIcon size={16} />}
          >
            {HERO_CONTENT.cta.secondary.text}
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hero__decoration">
        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>
        <div className="hero__grid"></div>
      </div>
    </section>
  );
};

export default Hero;

