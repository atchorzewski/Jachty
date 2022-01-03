import React from 'react'

import Naglowek from '../components/Naglowek'
import Stopka from '../components/Stopka'
import ZawartoscStrony from '../components/stronaGlowna/ZawartoscStrony'

import '../styles/stronaGlowna/zawartoscStrony.css'

const StronaGlowna = () => {
  return (
    <div className='stronaGlowna '>
      <Naglowek />
      <ZawartoscStrony />
      <Stopka />
    </div>
  )
}

export default StronaGlowna
