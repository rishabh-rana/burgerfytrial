import React from 'react';

const order = (props) => {

const ingredients = [];
for(let ingred in props.ingredients){
  ingredients.push({name:ingred,amount:props.ingredients[ingred]});
}
const transformedingredients = ingredients.map(i => {
  return(
    <span key={i.name}>{i.name} ({i.amount}) </span>
  )
})

  return(
    <div>
    <p>ingredients: {transformedingredients} </p>
    <p> Price: <strong> INR {props.price} </strong> </p>
    </div>

  );
}

export default order;
