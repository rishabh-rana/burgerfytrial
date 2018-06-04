import React from 'react';
import './buildcontrol.css'
const control = (props) => {
  return (
      <div className='controlUI'>
        <div className='label'>{props.label}</div>
        <button className='contbutton' onClick={() => props.change(props.label, 1)}>+</button>
        <button className='contbutton' onClick={() => props.change(props.label, -1)}>-</button>
      </div>
  )
}

export default control;
