import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import currencyHelper from '../services/currencyHelper'

function Header() {
  const balance = useSelector((state) => state.menu.balance)

  return (
<header>
<div class="w-100 bg-white pt-4">
      <img class="rounded-circle col-sm-2 p-3 col-4" src="https://neal.fun/spend/billgates.jpg" alt="billy-billy"></img>
      <h2 class="py-4">Spend Bill Gate's Money</h2>

      </div>
      <div className='card__button-greenbg text-white fw-bolder pt-3 pb-3 mb-2'>
        <h2>{formatter.format(balance)}</h2>
      </div>
      </header>
  )
}


export default Header



var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});  
