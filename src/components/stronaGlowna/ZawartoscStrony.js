import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTS from '../../constans/routes'

import '../../styles/stronaGlowna/zawartoscStrony.css'

const ZawartoscStrony = () => {
  return (
    <main className='zawartoscStrony'>
      <div className='boxStrony'>
        <section className='boxZnajdzJachty'>
          <h2 className='tytul'>
          Czarter jachtów – Mazury i nie tylko – wypłyń z nami ku przygodzie!
          </h2>
          <Link to={ROUTS.JACHTY} className='linkSprawdz'>
          <button type='button' className='przyciskSprawdz'>Sprawdz nasze jachty</button>
          </Link>
        </section>
        <section className='boxOpis'>
          <h1 className='tytul'>JachtPol S.A.</h1>
          <p className='textStronaGlowna'>
            Szukasz pomysłu na spokojne rodzinne wakacje, które pozwolą Ci oderwać się od codzienności, odpocząć wśród pięknej przyrody i naładować akumulatory nową energią, a Twoim dzieciom zapewnią niezapomnianą przygodę? A może chcesz spędzić szalony weekend z przyjaciółmi lub zorganizować wypad integracyjny ze znajomymi z pracy? Czarter jachtów na Mazurach pozwoli Ci zrealizować plany. Z nami nie musisz posiadać patentu sternika – wystarczy, że wybierzesz termin i zarezerwujesz najlepszy jacht dla siebie, a my zajmiemy się sprawami organizacyjnymi.
          </p>
        </section>
      </div>
    </main>
  )
}

export default ZawartoscStrony
