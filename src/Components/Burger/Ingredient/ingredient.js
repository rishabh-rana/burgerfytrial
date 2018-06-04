import React from 'react';
import './BurgerIngredient.css'
const ingredient = (props) => {
  let ing = null;
  switch(props.type){
    case ('bottom-bread'):
      ing= <div className='BreadBottom' ></div>;
      break;
    case ('salad'):
      ing= <div className='Salad' ></div>;
      break;
    case ('meat'):
      ing= <div className='Meat' ></div>;
      break;
    case ('cheese'):
      ing= <div className='Cheese' ></div>;
      break;
    case ('bacon'):
      ing= <div className='Bacon' ></div>;
      break;
    case ('top-bread'):
      ing = (
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>
      );
      break;

    default:
    ing = null;

  }
  return ing;
}

export default ingredient;
