import React, { useContext, useEffect, useState } from 'react'

import { StoreContext } from "../../context/StoreProvider";
import Yacht from './Yacht';

import '../../styles/jachty/jachtyZawartosc.css'

const JachtyZawartosc = () => {
  const [filtr, setFiltr] = useState('wszytskie')
  const { getYachts, yachts } = useContext(StoreContext)

  useEffect(() => {
    getYachts()
  }, [getYachts])

  return (
    <div className='jachtyBox'>
      <h1 className='tytulJachty'>Nasze jachty</h1>
      <div className='filtrBox'>
        <div onClick={() => setFiltr('wszytskie')} className={`filtr ${filtr === 'wszytskie' && 'filtrAktywny'}`}>wszytskie</div>
        <div onClick={() => setFiltr('morski')} className={`filtr ${filtr === 'morski' && 'filtrAktywny'}`}>morski</div>
        <div onClick={() => setFiltr('śródlądowy')} className={`filtr ${filtr === 'śródlądowy' && 'filtrAktywny'}`}>śródlądowy</div>
      </div>
      {(yachts && yachts.length ) && (
        yachts.filter(yacht => {
          if(filtr === 'wszytskie') {
            return yacht
          }

          if(filtr === yacht.Typ) {
            return yacht
          }

        }).map((yacht) => (
          <Yacht key={yacht.ID_Jacht} {...yacht} />
        ))
      )}
    </div>
  )
}

export default JachtyZawartosc
