import React from 'react';
import './Button.css';

/**
 * Reusable Button component with multiple variants
 */
const Button = ({
  children,
  variant = 'primary', // primary, secondary, ghost, outline
  size = 'medium', // small, medium, large
  href,
  external = false,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    icon && 'btn--with-icon',
    disabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;

