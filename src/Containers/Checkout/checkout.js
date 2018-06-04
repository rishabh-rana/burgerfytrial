import React, {Component} from 'react';
import Summary from '../../Components/Checkoutsummary/checkoutsummary';
import Contact from './contactdata';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
class Checkout extends Component{



  cancelHandler = () => {
    this.props.history.goBack();
  }
  continueHandler = () => {
    this.props.history.replace('/checkout/contact');
  }
  render(){
let summary = (<Redirect to="/" />);
if(this.props.ingredients){
  summary = (
    <div>
      <Summary ingredients={this.props.ingredients} cancel={this.cancelHandler} continue={this.continueHandler}/>
      <Route path={this.props.match.path+'/contact'} render={(props) => (<Contact ingredients={this.props.ingredients} price={this.props.price} {...props}/>)} />
    </div>
  )
}
    return summary;
  }
}


const mapstatetoprops = (state) => {
  return {
    ingredients:state.ingredients,
    price:state.price
  }
}

const mapdispatchtoprops =(dispatch) => {
  return {

  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Checkout);
