import React from 'react';
import {Redirect} from 'react-router-dom';
const initialstate={
  ingredients:null,
  price:0,
  loading:false,
  redirect:false,
  loadauth:false,
  token:null,
  userid:null
}
const prices = {
  cheese:20,
  bacon:50,
  meat:60,
  salad:10
};
const reducer =(state=initialstate,action) => {

  if(action.type=='changeingredient'){
    const newstate = {...state, ingredients: {...state.ingredients}};
    switch(action.name){
      case("salad"):
        newstate.ingredients.salad += parseInt(action.value);
        newstate.price += (action.value)*(prices.salad);
        break;
      case("meat"):
        newstate.ingredients.meat += parseInt(action.value);
        newstate.price += (action.value)*(prices.meat);
        break;
      case("bacon"):
        newstate.ingredients.bacon += parseInt(action.value);
        newstate.price += (action.value)*(prices.bacon);
        break;
      case("cheese"):
        newstate.ingredients.cheese += parseInt(action.value);
        newstate.price += (action.value)*(prices.cheese);
        break;
    }
    return newstate;
  }

  if(action.type=='set'){
    const newstate = {...state, ingredients: {...state.ingredients}};
    newstate.ingredients = action.ingredients;
    return newstate;
  }

if(action.type=='setprice'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.price = 0;
  return newstate;
}

if(action.type=='postorder'){
    const newstate = {...state, ingredients: {...state.ingredients}};
    newstate.loading=false;
    newstate.redirect=true;
    return newstate;
}
if(action.type=='loadinghandler'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.loading = true;
  return newstate;
}
if(action.type=='toggle'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.redirect=false;
  return newstate;
}

if(action.type=='authstart'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.loadauth = true;
  return newstate;
}
if(action.type=='authsuccess'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.token = action.authdata.idToken;
  newstate.loadauth = false;
  newstate.userid = action.authdata.localId;
  console.log(newstate);
  return newstate;
}
if(action.type=='logout'){
  const newstate = {...state, ingredients: {...state.ingredients}};
  newstate.token = null;
  newstate.userid = null;
  return newstate;
}

  return(state);
}
export default reducer;
