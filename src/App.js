import * as React from 'react';
import './App.css';
import './styles/theme.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link from '@mui/material/Link';
import Homepage from './Components/Homepage';
import Salty from './Components/Salty';
import Sweet from './Components/Sweets';
import Activities from './Components/Activities';
import Measurements from './Components/Measurements';

import MassinhaNuvem from './Components/Activities_Components/MassinhaNuvem';

import BiscoitosAvelã from './Components/Sweet_Components/BiscoitosAvelã';
import Cookies from './Components/Sweet_Components/Cookies';
import Macarrons from './Components/Sweet_Components/Macarrons';
import Palmiers from './Components/Sweet_Components/Palmiers';
import Pipocas from './Components/Sweet_Components/Pipocas';
import Suspiros from './Components/Sweet_Components/Suspiros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import SwipeablePhoneDrawer from './Components/Custom_Components/SwipeablePhoneDrawer';


function App() {
  //Media Query

  const [isNotDesktop, setisNotDesktop] = React.useState(false);
  const notDesktopMediaQuery = '(max-width: 820px)';

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(notDesktopMediaQuery);
    setisNotDesktop(mediaQuery.matches); // Set initial value

    const handleResize = (e) => {
      setisNotDesktop(e.matches); // Update value on resize
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  });

  //TOGGLE DRAWER
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        {isNotDesktop ? (
          <div>
            <Button className='btn-icon' onClick={toggleDrawer(true)}>
              <FontAwesomeIcon className="burger-icon" icon={faBars} />
              Menu
            </Button>
            <SwipeablePhoneDrawer open={openDrawer} onClose={toggleDrawer(false)} />
          </div>
        ) : (
          <div className="App-header">
            <Link href="/">Homepage</Link>
            <Link href="sweet">Doces</Link>
            <Link href="salty">Salgados</Link>
            <Link href="activities">Atividades</Link>
            <Link href="measurements">Medidas</Link>
          </div>
        )}
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="salty" element={<Salty />} />
          <Route path="sweet" element={<Sweet />} />
          <Route path="activities" element={<Activities />} />
          <Route path="measurements" element={<Measurements />} />

          <Route path="massinha_nuvem" element={<MassinhaNuvem />} />

          <Route path="biscoitosAvelã" element={<BiscoitosAvelã />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="macarrons" element={<Macarrons />} />
          <Route path="palmiers" element={<Palmiers />} />
          <Route path="pipocas" element={<Pipocas />} />
          <Route path="suspiros" element={<Suspiros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
