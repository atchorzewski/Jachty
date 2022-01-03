import React, { createContext, useState } from 'react';

import request from '../connectAPI/request';

export const StoreContext = createContext(null)

const StoreProvider = ({children}) => {
  const [yachts, setYachts] = useState([])
  const [allYachts, setAllYachts] = useState([])
  const [userReservations, setUserReservations] = useState([])
  const [actualYacht, setActualYacht] = useState({})
  const [wiadomoscError, setWiadomoscError] = useState('')
  const [wiadomoscRezerwacja, setWiadomoscRezerwacja]  = useState('')

   const getYachts = async () => {
    const { data } = await request.get('/getYachts')
    setYachts(data);
  }

  const getAllYachts = async (id) => {
    const { data } = await request.get('/getAllYachts')
    const jachty = data.filter(rezerwacja => {
      if(!rezerwacja.ID_Rezerwacji) {
        return
      }

      if(rezerwacja.ID_Jacht[0] === id) {
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

        if(rezerwacja.DataZwrotu.slice(0,10) > today) {
          return rezerwacja
        }
      }
    })
    setAllYachts(jachty);
  }

  const getAllReservationByID = async (id) => {
    const { data } = await request.get(`/getAllReservationByID/${id}`)
    setUserReservations(data);
  }

  const getYacht = async (id) => {
    const { data } = await request.get(`/getYacht/${id}`)
    setActualYacht(...data);
  }

  const addReservation = async (reservation) => {
    await fetch('http://localhost:8090/API/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservation),
    })
    .then(async response => {
      return await response.json()
    })
    .then(data => {
      setWiadomoscRezerwacja('Udało ci sie zarezerwować jacht')
    })
    .catch((error) => {
      setWiadomoscError('Wystąpił problem z połączeniem z serwerem')
      console.error('Error:', error);
    });
  }

  const addUser = async (user) => {
    console.log(user)
    await fetch('http://localhost:8090/API/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials" : true ,
          },
          body: JSON.stringify(user),
    })
    .then(async response => {
      return await response.json()
    })
    .then(data => {
       setWiadomoscRezerwacja('Udało ci sie zarezerwować jacht')
    })
    .catch((error) => {
      setWiadomoscError('Wystąpił problem z połączeniem z serwerem')
      console.error('Error:', error);
    });
  }

  return (
    <StoreContext.Provider value={{
      getYachts,
      getAllYachts,
      getAllReservationByID,
      addReservation,
      addUser,
      getYacht,
      setWiadomoscError,
      setWiadomoscRezerwacja,
      yachts,
      allYachts,
      userReservations,
      actualYacht,
      wiadomoscError,
      wiadomoscRezerwacja
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider