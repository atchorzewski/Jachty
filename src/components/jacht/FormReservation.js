import React, { useState, useContext, useEffect} from 'react';

import { StoreContext } from "../../context/StoreProvider";

import '../../styles/jacht/jachtZawartosc.css'

const FormReservation = ({ID_Jacht, allYachts}) => {
  const [dataOd, setDataOd] = useState('');
  const [dataDo, setDataDo] = useState('');
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
 

  const { addUser, addReservation, wiadomoscError, setWiadomoscError, wiadomoscRezerwacja, setWiadomoscRezerwacja } = useContext(StoreContext)

  useEffect(() => {
    setWiadomoscError('')
    setWiadomoscRezerwacja('')
  }, [])
  
  const dodanieUzytkownikaFormularz = (e) => {
    e.preventDefault();
    setWiadomoscRezerwacja('')
    setWiadomoscError('')

    const userId = Math.floor(Math.random() * 10000);

    if(!dataOd || !dataDo || !imie || !nazwisko || !telefon || !email) {
      setWiadomoscError('wypełnij wszystkie dane')
      return null
    }

    if(allYachts.some(yacht =>{
      if((yacht.DataRezerwacji.slice(0, 10) > dataOd && yacht.DataZwrotu.slice(0, 10) < dataDo) && (yacht.DataRezerwacji.slice(0, 10) < dataDo && yacht.DataZwrotu.slice(0, 10) > dataDo)) {
        return true
      }
    })){
      return null
    }

    try {
      addUser({
        Imie: String(imie), 
        Nazwisko: String(nazwisko), 
        Telefon: String(telefon), 
        Email: String(email),
        ID: Number(userId)
      }).then(()=>{
        addReservation({
          DataRezerwacji: dataOd, 
          DataZwrotu: dataDo, 
          ID_Klient: Number(userId), 
          ID_Jacht
        })
      }).then (() => {
        if(wiadomoscError === 'Wystąpił problem z połączeniem z serwerem'){
          return null
        }
        setDataOd('')
        setDataDo('')
        setEmail('')
        setImie('')
        setNazwisko('')
        setTelefon('')
        setWiadomoscError('')
      })
    } catch(e) {
      console.log(e)
    }
      
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  } 

  today = yyyy + '-' + mm + '-' + dd;

  return (
    <div>
      <form className='formularz' onSubmit={dodanieUzytkownikaFormularz} method='POST'>
        <div className='dataBox'>
          <div>Data od: <input type="date" name="" id="" placeholder='Data od' value={dataOd} min={today} onChange={({target}) => setDataOd(target.value)}/></div>
          
          <div>Data do: <input type="date" name="" id="" placeholder='Data do' value={dataDo} onChange={({target}) => setDataDo(target.value)} min={dataOd}/></div>
        </div>
        <input type="text" name="" id="" placeholder='Imie' value={imie} onChange={({target}) => setImie(target.value)}/>
        <input type="text" name="" id="" placeholder='Nazwisko' value={nazwisko} onChange={({target}) => setNazwisko(target.value)}/>
        <input type="tel" name="" id="" placeholder='Telefon' value={telefon} onChange={({target}) => setTelefon(target.value)}/>
        <input type="email" name="" id="" placeholder='Email' value={email} onChange={({target}) => setEmail(target.value)}/>
        {wiadomoscError && <p className='wiadomoscError'>{wiadomoscError}</p>}
        {wiadomoscRezerwacja &&<p className='wiadomoscRezerwacja'>{wiadomoscRezerwacja}</p>}
        <button type='submit' className='przycikZarezerwuj'>Zarezerwuj</button>
      </form>
    </div>
  )
}

export default FormReservation
