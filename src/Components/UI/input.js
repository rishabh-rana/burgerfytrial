import React from 'react';

const Input =(props) => {
  return(

<div>
  <label>{props.label}</label>
  <input type={props.type} placeholder={props.label} {...props} onChange={props.changed}/>
</div>
  )
}

export default Input;
