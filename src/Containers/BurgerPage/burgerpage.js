import React, { Component }  from 'react';
import { Fragment } from 'react';
import {connect} from 'react-redux';
import Modal from '../../Components/UI/Modal/modal';
import Summary from '../../Components/Burger/ordersummary/ordersummary'
import Burger from '../../Components/Burger/burger';
import BuildControls from '../../Components/Buildcontrols/buildcontrols';
import Spinner from '../../Components/UI/spinner/spinner';
import axios from '../../axios'
import Checkout from '../Checkout/checkout';

class BurgerPage extends Component {

state = {
  modaldisplay: false,
  loading: false
}






modaldisplayHandler = () => {
  let newdisplay = this.state.modaldisplay;
  newdisplay = !newdisplay;
  this.setState({modaldisplay:newdisplay});

}

orderHandler = () => {


  this.props.history.push('/checkout')
}

componentDidMount() {
  this.props.toggleredirect();
  axios.get('ingredients.json').then(response => {
    console.log(response.data)
    this.props.setIngredients(response.data);
  })
  this.props.setprice();
}


  render(){
    let ordersummary=null;


    let burger = <Spinner />
    if(this.props.ingredients){
      burger = (<Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls change={this.props.changeingredient}  price={this.props.price} modald={this.modaldisplayHandler}/>
                </Fragment>);
      ordersummary = (<Summary state={this.props.ingredients} price={this.props.price}/>);
    }
    if(this.state.loading){
      ordersummary = <Spinner />
    }

    return (
        <Fragment>
        <Modal modald={this.modaldisplayHandler} modaldisplay={this.state.modaldisplay} order={this.orderHandler}>{ordersummary}</Modal>
          {burger}

      </Fragment>
    )

  }



}


const mapstatetoprops = (state) => {
  return{
    ingredients:state.ingredients,
    price:state.price
  }
}

const mapdispatchtoprops =(dispatch) => {
  return {
    changeingredient : (name,value) => dispatch({type:'changeingredient',name:name,value:value}),
    setIngredients : (ingredients) => dispatch({type:'set',ingredients:ingredients}),
    setprice : () => dispatch({type:'setprice'}),
    toggleredirect : () => dispatch({type:'toggle'})



  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(BurgerPage);
