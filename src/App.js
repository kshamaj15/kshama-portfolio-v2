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
      {/* <h1>Development Is In Progress</h1> */}
      {loading ? <div id="loading"></div> :
        <div className="container">
          <TopBar />
          <main className='main-container'>
            <section className='home-page' data-aos='zoom-in'>
              <p className='my-details'> Hi, I am</p>
              <h1 className='my-name'>Kshama Jain</h1>
              <p className='my-details'>I'm a Software Engineer with more than 4 years of experience in designing and developing large scale web applications with React, JavaScript, TypeScipt, Node JS. </p>
            </section>

            <div className='divider'></div>

            <section className='about full-height' id='about' data-aos='fade-out'>
              <h1 className='heading'>More About Me</h1>
              <div className='d-flex' data-aos='fade-out'>
                <article>
                  <p>I'm a Software Engineer. I was born in 1996 and grew up in Sagar, Madhya Pradesh (India)</p>
                  <p>I have done my schooling from Sagar. I have graduated from <b className='highlight'>SGSITS Indore</b> in 2018</p>
                  <p>Since 2018 I am working as Software Engineer</p>
                  <p>I have good knowledge of Frontend technologies also I love to solve Data structure and algorithms problems</p>
                  <p>Other than my work, I love to read books, also learn about business and entrepreneurship</p>
                </article>
                <div className='my-photo-container' data-aos='zoom-in-up'>
                  <img height='300px' width='300px' src='/myPhoto.JPG' alt='my-img' />
                </div>
              </div>
            </section>

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
