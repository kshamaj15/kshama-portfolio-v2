import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/content';
import { THEME, getStoredTheme, toggleTheme, applyTheme } from '../../data/theme';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../icons';
import './Header.css';

// Logo images for different themes (SVG)
const LOGO_DARK = '/logo-dark.svg';  // Coral/orange logo for dark theme
const LOGO_LIGHT = '/logo-light.svg'; // Teal logo for light theme

const Header = () => {
  const [theme, setTheme] = useState(THEME.DARK);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);
    updateFavicon(storedTheme);
  }, []);

  // Update favicon based on theme
  const updateFavicon = (currentTheme) => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = currentTheme === THEME.DARK ? LOGO_DARK : LOGO_LIGHT;
    }
  };

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
    updateFavicon(newTheme);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav">
        <a href="/" className="header__logo">
          <img 
            src={theme === THEME.DARK ? LOGO_DARK : LOGO_LIGHT} 
            alt="KJ Logo" 
            className="header__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="header__links">
          {NAV_LINKS.map((link, index) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`header__link ${activeSection === link.id ? 'header__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span className="header__link-number">{(index + 1).toString().padStart(2, '0')}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <button
            className="header__theme-toggle"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === THEME.DARK ? 'light' : 'dark'} mode`}
          >
            {theme === THEME.DARK ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>

          <button
            className="header__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <ul className="header__mobile-links">
          {NAV_LINKS.map((link, index) => (
            <li key={link.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <a
                href={`#${link.id}`}
                className="header__mobile-link"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span className="header__link-number">{(index + 1).toString().padStart(2, '0')}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div className="header__backdrop" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;

