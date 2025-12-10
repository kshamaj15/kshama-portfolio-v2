/**
 * Theme configuration and utilities
 */

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

/**
 * Get the user's preferred theme from system preferences
 */
export const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME.DARK
      : THEME.LIGHT;
  }
  return THEME.DARK;
};

/**
 * Get the stored theme from localStorage or fall back to system preference
 */
export const getStoredTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === THEME.DARK || stored === THEME.LIGHT) {
      return stored;
    }
  }
  return getSystemTheme();
};

/**
 * Apply theme to document and persist to localStorage
 */
export const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
};

/**
 * Toggle between light and dark themes
 */
export const toggleTheme = (currentTheme) => {
  const newTheme = currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  applyTheme(newTheme);
  return newTheme;
};

