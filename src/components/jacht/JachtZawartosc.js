import React,  { useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { StoreContext } from "../../context/StoreProvider";

import FormReservation from './FormReservation';

import '../../styles/jacht/jachtZawartosc.css'

const JachtZawartosc = () => {
  const { getYacht, actualYacht, getAllYachts, allYachts} = useContext(StoreContext)

  const { pathname } = useLocation();

  const id = pathname.replace('/jacht/','')

  useEffect(() => {
    getYacht(Number(id))
    getAllYachts(Number(id))
  }, [id])

  if(!actualYacht) {
    return <div className='jachtZawartosc'>
      <p className='nieMa'>nie ma jachty o takim id</p>
    </div>
  }

  if(Object.keys(actualYacht).length === 0) {
    return null
  }

  const {ID_Jacht, Dlugosc, MarkaModel, Opis, RokProdukcji, Szerokosc, Typ, Zanurzenie, link} = actualYacht;

  return (
    <div className='jachtZawartosc'>
      <div className='zdjecieZawartosc'>
        <img className='zdjecieJacht' src={link} alt={MarkaModel} />
      </div>
      <div className='infoZawartosc'>
        <div >
          <h1 className='titleZawartosc'>{MarkaModel}</h1>
        </div>
        <div>
          <p><span className='spanGruby'>Typ:</span> {Typ}</p>
          <p><span className='spanGruby'>Rok produkcji:</span> {RokProdukcji.slice(0, 10)}</p>
          <p><span className='spanGruby'>Długość:</span> {Dlugosc}</p>
          <p><span className='spanGruby'>Szerokość:</span> {Szerokosc}</p>
          <p><span className='spanGruby'>Zanurzenie:</span> {Zanurzenie}</p>
        </div>
        <div>
          <p className='tekstZawartosc'>{Opis}</p>
        </div>
         <div>
          {allYachts.length !== 0 && (
            <>
            <h4>Zarezerwowany:</h4>
              {allYachts.map(yacht => {
                return (
                  <p key={yacht.ID_Rezerwacji} className='rezerwacjaKolor'>Od: {yacht.DataRezerwacji.slice(0,10)} do: {yacht.DataZwrotu.slice(0,10)}</p>
                )
              })}
            </>
          )}
        </div>
        <FormReservation ID_Jacht={ID_Jacht} allYachts={allYachts}/>
      </div>
    </div>
  )
}

export default JachtZawartosc
