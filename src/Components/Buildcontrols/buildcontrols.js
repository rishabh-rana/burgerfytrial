import React from 'react';
import Control from './Buildcontrol/buildcontrol'

const controls = (props) => {

let check = true;
if(props.price !== 0){
  check = false;
}

  return (
    <div className='controlbox'>
    <h1>{props.price}</h1>
      <Control label='cheese' change={props.change}/>
      <Control label='bacon' change={props.change}/>
      <Control label='meat' change={props.change}/>
      <Control label='salad' change={props.change}/>
      <button disabled={check} onClick={props.modald}>Checkout</button>
    </div>
  )
}

export default controls;
