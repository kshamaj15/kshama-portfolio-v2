import React from 'react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../../data/content';
import { Icon } from '../icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Mobile social links */}
      <div className="footer__social">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="footer__social-link"
          >
            <Icon name={link.icon} size={22} />
          </a>
        ))}
      </div>

      <div className="footer__content">
        <p className="footer__text">
          Designed & Built by{' '}
          <a href="/" className="footer__link">
            {SITE_CONFIG.name}
          </a>
        </p>
        <p className="footer__copyright">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

