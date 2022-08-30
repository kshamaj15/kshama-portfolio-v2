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

import { ReactComponent as GitLogo } from './assets/profilesLogo/git.svg';
import { ReactComponent as LinkedInLogo } from './assets/profilesLogo/ln.svg';
import { ReactComponent as InstaLogo } from './assets/profilesLogo/insta.svg';
// import git from './assets/profilesLogo/github.png';

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
          <div className='playground'>
            <div className='my-profiles'>
              <a><GitLogo className='profile-logo' /></a>
              <a><LinkedInLogo className='profile-logo' /></a>
              <a><InstaLogo className='profile-logo' /></a>
            </div>
            <main className='main-container'>
              <HomePage />
              <About />
              <Experience />
              <Skills />
              {/* <Projects />
            <Education />  */}
              <Contact />
            </main>
            <div className='email'>kshamaj150896@gmail.com</div>
          </div>
        </div>}
    </>
  );
}

export default App;
