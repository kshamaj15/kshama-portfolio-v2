import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { THEME } from './constant';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HomePage from './sections/HomePage';
import About from './sections/About';
// ..
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 200,
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease',
});

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <>
      {loading ? <div id="loading"></div> :
        <div className="container">
          <TopBar />
          <main className='main-container'>
            <HomePage />

            <div className='divider'></div>

            <About />

            <div className='divider'></div>

            <Experience />

            <div className='divider'></div>

            <Skills />

            {/* <div className='divider'></div>

            <Projects /> */}

            {/* <div className='education'></div>

            <Education /> */}

            <div className='divider'></div>

            <Contact />

          </main>
        </div>}
    </>
  );
}

export default App;
