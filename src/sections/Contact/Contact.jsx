import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_CONTENT, SITE_CONFIG } from '../../data/content';
import { Button, SectionHeader } from '../../components/ui';
import { MailIcon } from '../../components/icons';
import './Contact.css';

const Contact = () => {
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
    <section id="contact" className={`contact ${isVisible ? 'contact--visible' : ''}`} ref={sectionRef}>
      <div className="contact__container">
        <SectionHeader
          number={6}
          title={CONTACT_CONTENT.title}
          subtitle={CONTACT_CONTENT.subtitle}
          align="center"
        />

        <div className="contact__content">
          <p className="contact__description" style={{ animationDelay: '0.2s' }}>
            {CONTACT_CONTENT.description}
          </p>

          <div className="contact__cta" style={{ animationDelay: '0.3s' }}>
            <Button
              href={CONTACT_CONTENT.cta.href}
              variant="primary"
              size="large"
              icon={<MailIcon size={18} />}
              iconPosition="left"
            >
              {CONTACT_CONTENT.cta.text}
            </Button>
          </div>

          <div className="contact__email" style={{ animationDelay: '0.4s' }}>
            <span className="contact__email-label">or reach me directly at</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="contact__email-link">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="contact__decoration">
        <div className="contact__circle contact__circle--1"></div>
        <div className="contact__circle contact__circle--2"></div>
      </div>
    </section>
  );
};

export default Contact;

