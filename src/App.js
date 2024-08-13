import React from 'react';
import './App.css';
import './theme.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link from '@mui/material/Link';
import Homepage from './Components/Homepage';
import Salty from './Components/Salty';
import Sweet from './Components/Sweets';
import Activities from './Components/Activities';
import Measurements from './Components/Measurements';


function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">

        {/* <Link className="burger-icon" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
        </Link> */}
        {/* <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}> */}
        <Link href="/">Homepage</Link>
        <Link href="sweet">Doces</Link>
        <Link href="salty">Salgados</Link>
        <Link href="activities">Atividades</Link>
        <Link href="measurements">Measurements</Link>
        {/* </nav> */}
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="salty" element={<Salty />} />
          <Route path="sweet" element={<Sweet />} />
          <Route path="activities" element={<Activities />} />
          <Route path="measurements" element={<Measurements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
