import React from 'react';
import './burger.css';
import Ingredient from './Ingredient/ingredient'
const burger = (props) => {




  return(
    <div className='burger'>
      <Ingredient type='top-bread' />

    {
      Object.keys(props.ingredients).map((ingredname)=>{
        return [...Array(props.ingredients[ingredname])].map((_,count)=>{
          return <Ingredient type={ingredname} key={count+ingredname} />
        })
      })
    }

      <Ingredient type='bottom-bread' />

    </div>
  )
}

export default burger;
