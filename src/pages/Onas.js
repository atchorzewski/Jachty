import React from 'react';

import Naglowek from '../components/Naglowek';
import ONasZawartosc from '../components/oNas/ONasZawartosc';
import Stopka from '../components/Stopka';

import '../styles/stronaGlowna/zawartoscStrony.css'

const Onas = () => {
  return (
    <div className='stronaGlowna'>
      <Naglowek />
      <ONasZawartosc />
      <Stopka />
    </div>
  )
}

export default Onas
