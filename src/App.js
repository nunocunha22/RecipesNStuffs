import * as React from 'react';
import './App.css';
import './styles/theme.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';

import SwipeablePhoneDrawer from './Components/Custom_Components/SwipeablePhoneDrawer';

import Homepage from './Components/Homepage';
import Activities from './Components/Activities';
import Fillings from './Components/Fillings';
import Measurements from './Components/Measurements';
import Salty from './Components/Salty';
import Sweet from './Components/Sweets';

import ChiaSlime from './Components/Activities_Components/ChiaSlime';
import MassinhaNuvem from './Components/Activities_Components/MassinhaNuvem';

import CarameloMorango from './Components/Fillings_Components/Caramelo_morango';
import RecheioBaunilha from './Components/Fillings_Components/Recheio_baunilha';
import RecheioCaramelo from './Components/Fillings_Components/Recheio_caramelo';
import RecheioChocolate from './Components/Fillings_Components/Recheio_chocolate';
import RecheioLimao from './Components/Fillings_Components/Recheio_limão';

import CroqueMonsieur from './Components/Salty_Components/CroqueMonsieur';
import Empadas from './Components/Salty_Components/Empadas';
import SaltyWaffles from './Components/Salty_Components/SaltyWaffles';

import BiscoitosAvelã from './Components/Sweet_Components/BiscoitosAvelã';
import Bolachas from './Components/Sweet_Components/Bolachas';
import BolachasSemOvo from './Components/Sweet_Components/BolachasSemOvo';
import Brioche from './Components/Sweet_Components/Brioche';
import ButterCookies from './Components/Sweet_Components/ButterCookies';
import Crepes from './Components/Sweet_Components/Crepes';
import Cookies from './Components/Sweet_Components/Cookies';
import Cupcakes from './Components/Sweet_Components/Cupcakes';
import Donuts from './Components/Sweet_Components/Donuts';
import Macarrons from './Components/Sweet_Components/Macarrons';
import MiniCheesecakes from './Components/Sweet_Components/MiniCheesecakes';
import MousseChocolate from './Components/Sweet_Components/MousseChocolate';
import Palmiers from './Components/Sweet_Components/Palmiers';
import Pipocas from './Components/Sweet_Components/Pipocas';
import Suspiros from './Components/Sweet_Components/Suspiros';
import Vienneta from './Components/Sweet_Components/Viennetta';
import Waffles from './Components/Sweet_Components/Waffles';
import Yalanci from './Components/Sweet_Components/Yalanci';
import Brigadeiros from './Components/Sweet_Components/Brigadeiros';
import Tiramisu from './Components/Sweet_Components/Tiramisù';
import Panquecas from './Components/Sweet_Components/Panquecas';
import Pudins from './Components/Sweet_Components/Pudins';
import PanquecasBaconQueijo from './Components/Salty_Components/PanquecasBaconQueijo';


function App() {
  //MEDIA QUERY

  const [isNotDesktop, setisNotDesktop] = React.useState(false);
  const notDesktopMediaQuery = '(max-width: 820px)';

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(notDesktopMediaQuery);
    setisNotDesktop(mediaQuery.matches);

    const handleResize = (e) => {
      setisNotDesktop(e.matches);
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
            <Link href="/doces">Doces</Link>
            <Link href="/recheios">Recheios</Link>
            <Link href="/salgados">Salgados</Link>
            <Link href="/atividades">Atividades</Link>
            <Link href="/medidas">Medidas</Link>
          </div>
        )}
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/doces" element={<Sweet />} />
          <Route path="/recheios" element={<Fillings />} />
          <Route path="/salgados" element={<Salty />} />
          <Route path="/atividades" element={<Activities />} />
          <Route path="/medidas" element={<Measurements />} />

          {/* ACTIVITIES */}

          <Route path="atividades/massinha_nuvem" element={<MassinhaNuvem />} />
          <Route path="atividades/slime_com_chia" element={<ChiaSlime />} />

          {/* SALTY */}

          <Route path="salgados/croque_monsieur" element={<CroqueMonsieur />} />
          <Route path="salgados/empadas" element={<Empadas />} />
          <Route path="salgados/panquecas" element={<PanquecasBaconQueijo />} />
          <Route path="salgados/waffles_bacon_e_queijo" element={<SaltyWaffles />} />

          {/* SWEET */}

          <Route path="doces/biscoitosAvelã" element={<BiscoitosAvelã />} />
          <Route path="doces/bolachas" element={<Bolachas />} />
          <Route path="doces/bolachas_sem_ovo" element={<BolachasSemOvo />} />
          <Route path="doces/brigadeiros" element={<Brigadeiros />} />
          <Route path="doces/brioche" element={<Brioche />} />
          <Route path="doces/butterCookies" element={<ButterCookies />} />
          <Route path="doces/cookies" element={<Cookies />} />
          <Route path="doces/crepes" element={<Crepes />} />
          <Route path="doces/cupcakes" element={<Cupcakes />} />
          <Route path="doces/donuts" element={<Donuts />} />
          <Route path="doces/macarrons" element={<Macarrons />} />
          <Route path="doces/miniCheesecakes" element={<MiniCheesecakes />} />
          <Route path="doces/mousse_chocolate" element={<MousseChocolate />} />
          <Route path="doces/palmiers" element={<Palmiers />} />
          <Route path="doces/panquecas" element={<Panquecas />} />
          <Route path="doces/pipocas" element={<Pipocas />} />
          <Route path="doces/pudins" element={<Pudins />} />
          <Route path="doces/suspiros" element={<Suspiros />} />
          <Route path="doces/tiramisu" element={<Tiramisu />} />
          <Route path="doces/vienneta" element={<Vienneta />} />
          <Route path="doces/waffles" element={<Waffles />} />
          <Route path="doces/yalanci" element={<Yalanci />} />

          {/* FILLINGS */}

          <Route path="recheios/caramelo_morango" element={<CarameloMorango />} />
          <Route path="recheios/recheio_baunilha" element={<RecheioBaunilha />} />
          <Route path="recheios/recheio_caramelo" element={<RecheioCaramelo />} />
          <Route path="recheios/recheio_chocolate" element={<RecheioChocolate />} />
          <Route path="recheios/recheio_limao" element={<RecheioLimao />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
