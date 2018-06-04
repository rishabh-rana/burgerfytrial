import React,{Component} from 'react';
import Order from './order';
import axios from '../../axios';

import {connect} from 'react-redux';
import Spinner from '../../Components/UI/spinner/spinner';
class Orders extends Component{

  state = {
    orders:null,
    loading:true
  }

  componentDidMount() {
    axios.get('/orders.json').then(response => {

      const fetchedorders =[];
      for(let i in response.data){
        fetchedorders.push({...response.data[i],id:i})
      }
      this.setState({orders:fetchedorders,loading:false});
      console.log(this.state.orders)
    })
  }
  render(){

let orders = <Spinner />;

if(!this.state.loading){
  orders= (this.state.orders.map(order => {
    return (
      <Order ingredients={order.ingredients} price={order.price} key={order.id}/>
    )
  }));
}

    return(
      <div>
        {orders}
      </div>
    )
  }
}



export default Orders;
