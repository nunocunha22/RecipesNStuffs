import * as React from 'react';
import './App.css';
import './styles/theme.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link from '@mui/material/Link';
import Homepage from './Components/Homepage';
import Salty from './Components/Salty';
import Sweet from './Components/Sweets';
import Fillings from './Components/Fillings';
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
import CroqueMonsieur from './Components/Salty_Components/CroqueMonsieur';
import Waffles from './Components/Sweet_Components/Waffles';
import Cupcakes from './Components/Sweet_Components/Cupcakes';
import RecheioLimao from './Components/Fillings_Components/Recheio_limão';
import Crepes from './Components/Sweet_Components/Crepes';
import Donuts from './Components/Sweet_Components/Donuts';
import Brioche from './Components/Sweet_Components/Brioche';
import ButterCookies from './Components/Sweet_Components/ButterCookies';
import CarameloMorango from './Components/Fillings_Components/Caramelo_morango';


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
  }, []);

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
            <Link href="fillings">Recheios</Link>
            <Link href="salty">Salgados</Link>
            <Link href="activities">Atividades</Link>
            <Link href="measurements">Medidas</Link>
          </div>
        )}
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="sweet" element={<Sweet />} />
          <Route path="fillings" element={<Fillings />} />
          <Route path="salty" element={<Salty />} />
          <Route path="activities" element={<Activities />} />
          <Route path="measurements" element={<Measurements />} />

          {/* ACTIVITIES */}

          <Route path="massinha_nuvem" element={<MassinhaNuvem />} />

          {/* SALTY */}

          <Route path="croque_monsieur" element={<CroqueMonsieur />} />

          {/* SWEET */}

          <Route path="biscoitosAvelã" element={<BiscoitosAvelã />} />
          <Route path="brioche" element={<Brioche />} />
          <Route path="butterCookies" element={<ButterCookies />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="crepes" element={<Crepes />} />
          <Route path="cupcakes" element={<Cupcakes />} />
          <Route path="donuts" element={<Donuts />} />
          <Route path="macarrons" element={<Macarrons />} />
          <Route path="palmiers" element={<Palmiers />} />
          <Route path="pipocas" element={<Pipocas />} />
          <Route path="suspiros" element={<Suspiros />} />
          <Route path="waffles" element={<Waffles />} />

          {/* FILLINGS */}

          <Route path="recheio_limao" element={<RecheioLimao />} />
          <Route path="caramelo_morango" element={<CarameloMorango />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
