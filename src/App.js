import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import StoreProvider from "./context/StoreProvider";
import * as ROUTES from './constans/routes';

import StronaGlowna from './pages/StronaGlowna';
import Onas from './pages/Onas';
import Jachty from './pages/Jachty';
import Jacht from './pages/Jacht';
import Brak from './pages/Brak';

import './App.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path={ROUTES.STRONAGLOWNA} element={<StronaGlowna/>} />
            <Route exact path={ROUTES.ONAS} element={<Onas/>} />
            <Route exact path={ROUTES.JACHTY} element={<Jachty/>} />
            <Route exact path={ROUTES.JACHT} element={<Jacht/>} />
            <Route path={ROUTES.BARK} element={<Brak/>} />
          </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
