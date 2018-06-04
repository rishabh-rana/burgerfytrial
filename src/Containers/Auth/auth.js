import React,{Component} from 'react';
import Input from '../../Components/UI/input';
import Spinner from '../../Components/UI/spinner/spinner';
import axios from '../../axios'
import {connect} from 'react-redux';
import {auth} from '../../Store/actions';

class Auth extends Component {

  state= {
    orderform:{
      username:null,
      password:null
    },

    isSignup: true
  }
  // signupHandler = (event) => {
  //   event.preventDefault();
  //
  //
  //
  //   let data = {
  //     username:this.state.orderform.username,
  //     password:this.state.orderform.password
  //   }
  //   console.log(this.state);
  //
  //   axios.post('signup.json',data).then(response => {
  //     const newstate = {...this.state};
  //     newstate.loading = false;
  //     this.setState(newstate);
  //     this.props.history.push('/');
  //   })
  //
  //   const newstate = {...this.state};
  //   newstate.loading = true;
  //   this.setState(newstate);
  //
  // }

submitHandler = (event) => {
  event.preventDefault();
  this.props.onAuth(this.state.orderform.username,this.state.orderform.password,this.state.isSignup);
}

  inputHandler = (event,field) => {
    const immute = {...this.state.orderform};
    switch(field){
      case('username'):
        immute.username=event.target.value;
        break;
      case('password'):
        immute.password=event.target.value;
        break;

    }
    this.setState({orderform:immute});

  }

  switchHandler = () => {
    this.setState( prevstate => {
      return {isSignup: !prevstate.isSignup}
    })
  }
  render(){
let form = <Spinner />;
if(!this.props.loading){
  form = (<form onSubmit={this.submitHandler}>
    <Input type='text' label='Username' name='username' changed={(event) => this.inputHandler(event,'username')}/>
  <Input type='password' name='password' label='Password' changed={(event) => this.inputHandler(event,'password')}/>
  <button >Submit </button>

</form>)
}
    return(
      <div>

        {form}
        <button onClick={this.switchHandler}> Swich to {this.state.isSignup ? 'SignIn' : 'SignUp'} </button>

      </div>

    )
  }
}
const mapstatetoprops = (state) => {
  return{
    loading: state.loadauth
  }
}

const mapdispatchtoprops =(dispatch) => {
  return {
    onAuth : (username,password,isSignup) => dispatch(auth(username,password,isSignup))
  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Auth);
