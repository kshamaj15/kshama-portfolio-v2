import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { THEME } from './constant';

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
    <h1>Development Is In Progress</h1>
      {/* {loading ? <div id="loading"></div> :
        <div className="container">
          <TopBar />
          <main>
            <section className='home-page'>
              <p className='my-details'> Hi, I am</p>
              <h1 className='my-name'>Kshama Jain</h1>
              <p className='my-details'>I'm a Software Engineer with more than 4 years of experience in designing and developing large scale web applications with React, JavaScript, TypeScipt, Node JS. </p>
            </section>
            <section>
              <h1>More About Me</h1>
              <div>
                <p>I'm a Software Engineer. I was born in 1996 and grew up in Sagar, Madhya Pradesh (India)</p>
                <p>I have done my schooling from Sagar. I have graduated from <b>SGSITS Indore</b> in 2018</p>
                <p>Since 2018 I am working as Software Engineer</p>
                <p>I have good knowledge of Frontend technologies also I love to solve Data structure and algorithms problems</p>
                <p>Other than my work, I love to read books, also learn about business and entrepreneurship</p>
              </div>
              <div>
                <img src='/myPhoto.JPG' alt='my-img' />
              </div>
            </section>
          </main>
        </div>} */}
    </>
  );
}

export default App;
