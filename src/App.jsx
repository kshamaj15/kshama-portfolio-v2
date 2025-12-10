import React, { useState, useEffect } from 'react';
import { Header, Footer, SocialSidebar } from './components/layout';
import { Hero, About, Experience, Skills, Projects, Blog, Contact } from './sections';
import './styles/index.css';

/**
 * Main Application Component
 * Renders the portfolio with all sections and layout components
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-screen__spinner" />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Skip to content link for accessibility */}
      <a href="#about" className="skip-to-content">
        Skip to content
      </a>

      {/* Header with navigation */}
      <Header />

      {/* Side elements */}
      <SocialSidebar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

