import React, { Fragment} from 'react';
import './modal.css'
import {Link} from 'react-router-dom';

const modal = (props) => {

let hideclasslogic = (props.modaldisplay ? 'mymodal' : 'mymodal hidemodal');


  return(
    <Fragment>
    <div className={hideclasslogic}>
    {props.children}
    <button onClick={props.modald}>Close</button>
    <button onClick={props.order}>Place Order</button>
    <Link to="/checkout">Checkout</Link>
    </div>

    </Fragment>
  )
}

export default modal;
