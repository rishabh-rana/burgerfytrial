import React, {Fragment } from 'react';

const summary = (props) => {

let summarycomp = Object.keys(props.state).map(ingred => {
    return (<li key={ingred}><span style={{textTransform: 'capitalize'}}>{ingred}</span> : {props.state[ingred]}  </li>);
});

  return(
    <Fragment>
       <h1>summary</h1>
       {summarycomp}
       <h3> Total price: {props.price} rupees </h3>
       </Fragment>
  )
}

export default summary;
