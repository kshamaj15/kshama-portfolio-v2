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
      {loading ? <div id="loading"></div> :
        <div className="container">
          <TopBar />
          <div className='home-page'>
            Hi, I am
            <div>Kshama Jain</div>
            I'm a Software Engineer with more than 4 years of experience in designing and developing large scale web applications with React, JavaScript, TypeScipt, Node JS. 
          </div>
          <div>

          </div>
        </div>}
    </>
  );
}

export default App;
