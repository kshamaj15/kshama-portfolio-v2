import React from 'react';
import './SectionHeader.css';

/**
 * Consistent section header with animated underline
 */
const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'left', // left, center
  number,
  className = '' 
}) => {
  return (
    <header className={`section-header section-header--${align} ${className}`}>
      {number && (
        <span className="section-header__number">{number.toString().padStart(2, '0')}.</span>
      )}
      <h2 className="section-header__title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-header__subtitle">{subtitle}</p>
      )}
    </header>
  );
};

export default SectionHeader;

