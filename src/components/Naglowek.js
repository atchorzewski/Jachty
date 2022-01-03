import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTS from '../constans/routes'

import '../styles/naglowek.css'

const Naglowek = () => {
  return (
    <header className='naglowek'>
      <div className='boxNaglowek'>
        <Link to={ROUTS.STRONAGLOWNA} className='linkNaglowek'>
          <span className='nazwaFirmy'>JachtPol</span> <img src="/img/logo_firmy.png" alt="logo JachtPol"  className='zdjecieNaglowek'/>
        </Link>
      </div>
      <nav className='boxMenu'>
        <div className='boxLink'>
          <Link to={ROUTS.JACHTY} className='link'>Czartery</Link>
        </div>
        <div className='boxLink'>
          <Link to={ROUTS.ONAS} className='link'>O nas</Link>
        </div>
      </nav>
    </header>
  )
}

export default Naglowek
