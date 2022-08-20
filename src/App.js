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
          <div>
          </div>
          <div>

          </div>
        </div>}
    </>
  );
}

export default App;
