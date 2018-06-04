import React,{Component} from 'react';
import Spinner from '../../Components/UI/spinner/spinner';
import axios from '../../axios';
import Input from '../../Components/UI/input';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import postOrder from '../../Store/actions';
class Contact extends Component {

  state = {
    orderform: {
      name:null,
      address:null,
      contact:null
    },
    loading: false
  }

      orderHandler = (event) => {
        event.preventDefault();

        let order = {
          ingredients: this.props.ingredients,
          price:this.props.price,
          name:this.state.orderform.name,
          address:this.state.orderform.address,
          contact:this.state.orderform.contact
        }

        this.props.postorder(order);

      }

      inputHandler = (event,field) => {
        const immute = this.state.orderform;
        switch(field){
          case('name'):
            immute.name=event.target.value;
            break;
          case('address'):
            immute.address=event.target.value;
            break;
          case('contact'):
            immute.contact=event.target.value;
            break;
        }
        this.setState({orderform:immute});

      }


  render(){
let red = null;
if(this.props.redirect){
  red=<Redirect to='/' />
}


    let form = (<form>
      <Input type='text' label="Name" name='name' changed={(event) => this.inputHandler(event,'name')}/>
      <Input type='text' label="Address" name='address' changed={(event) => this.inputHandler(event,'address')}/>
      <Input type='number' label="Contact" name='contact' changed={(event) => this.inputHandler(event,'contact')}/>
      <button onClick={this.orderHandler}>ORDER </button>
    </form>);

    if(this.props.loading){
      form = <Spinner />
    }


    return(
      <div>
        <h1>enter data</h1>
        {form}
        {red}
      </div>
    )
  }
}
const mapstatetoprops = (state) => {
  return {
    loading : state.loading,
    redirect : state.redirect
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    postorder : (order) => dispatch(postOrder(order))
  }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Contact);
