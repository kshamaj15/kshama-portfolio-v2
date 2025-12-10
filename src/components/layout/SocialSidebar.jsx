import React from 'react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../../data/content';
import { Icon } from '../icons';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <>
      {/* Left sidebar - Social links */}
      <aside className="sidebar sidebar--left">
        <ul className="sidebar__social">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="sidebar__link"
              >
                <Icon name={link.icon} size={20} />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right sidebar - Email */}
      <aside className="sidebar sidebar--right">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="sidebar__email"
        >
          {SITE_CONFIG.email}
        </a>
      </aside>
    </>
  );
};

export default SocialSidebar;

