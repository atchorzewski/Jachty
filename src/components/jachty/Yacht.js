import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/jachty/jachtyZawartosc.css'

const Yacht = ({ID_Jacht, MarkaModel, link, Typ, Opis}) => {
  return (
    <div className='jachtBox'>
      <div className='zdjecieBox'>
        <img className='zdjecieJachtu' src={link} alt={MarkaModel} />
      </div>
      <div className='infoBox'>
        <h2>{MarkaModel} - <span>{Typ}</span></h2>
        <p>{Opis.slice(0, 200)}...</p>
      </div>
      <div className='przyciskBox'>
        <Link to={{pathname: `/jacht/${ID_Jacht}` }} className='linkZarezerwuj'>
          <button type="button" className='przyciskZarezerwuj'>Zarezerwuj</button>
        </Link>
      </div>
    </div>
  )
}

export default Yacht
