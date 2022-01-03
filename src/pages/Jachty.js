import React from 'react'

import Naglowek from '../components/Naglowek'
import Stopka from '../components/Stopka'
import JachtyZawartosc from '../components/jachty/JachtyZawartosc'

import '../styles/stronaGlowna/zawartoscStrony.css'

const Jachty = () => {
  return (
    <div className='stronaGlowna '>
       <Naglowek />
       <JachtyZawartosc />
       <Stopka />
    </div>
  )
}

export default Jachty
