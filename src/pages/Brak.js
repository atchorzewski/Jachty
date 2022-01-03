import React from 'react'

import Naglowek from '../components/Naglowek'

import '../styles/stronaGlowna/zawartoscStrony.css'

const Brak = () => {
  return (
    <div className='stronaGlowna '>
      <Naglowek />
      <p>nie ma strony o podanym adresie</p>
    </div>
  )
}

export default Brak
