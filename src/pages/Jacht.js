import React from 'react'

import JachtZawartosc from '../components/jacht/JachtZawartosc'
import Naglowek from '../components/Naglowek'
import Stopka from '../components/Stopka'

import '../styles/stronaGlowna/zawartoscStrony.css'

const Jacht = () => {
  
  return (
    <div className='stronaGlowna '>
       <Naglowek />
       <JachtZawartosc />
       <Stopka />
    </div>
  )
}

export default Jacht
