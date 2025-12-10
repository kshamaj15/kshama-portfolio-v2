import React from 'react';
import './Tag.css';

/**
 * Tag/Chip component for displaying skills, categories, etc.
 */
const Tag = ({
  children,
  variant = 'default', // default, accent, muted
  size = 'medium', // small, medium
  className = '',
}) => {
  const classes = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
};

export default Tag;

