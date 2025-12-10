import React from 'react';
import './Card.css';

/**
 * Versatile card component with hover effects
 */
const Card = ({
  children,
  variant = 'default', // default, elevated, bordered, glass
  hover = true,
  padding = 'medium', // none, small, medium, large
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const classes = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    hover && 'card--hover',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Card;

