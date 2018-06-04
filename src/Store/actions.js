import axios from 'axios';



const postorder = (orderdata) => {
  return dispatch => {
      dispatch({type:'loadinghandler'});
      axios.post('orders.json',orderdata).then(response => {
      dispatch({type:'postorder'})
    });
  }
}


const authstart = () => {
  console.log('running');
  return {
    type:'authstart'

  }
}
const authsuccess = (authdata) => {
  return {
    type:'authsuccess',
    authdata:authdata

  }
}

const auth = (username,password,isSignup) => {
  return dispatch => {
    dispatch(authstart());
    const authdata = {
      email: username,
      password:password,
      returnSecureToken:true
    }
    let url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAaSHOcuzPFr-CrDyaCUsQFeflXt5wq0zg';
    if(!isSignup){
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAaSHOcuzPFr-CrDyaCUsQFeflXt5wq0zg';
    }
    axios.post(url,authdata).then(
      response => {
        console.log(response.data);
        dispatch(authsuccess(response.data));
        dispatch(timeout());
      }
    )
  }
}
const logout = () => {
  console.log('logout')
  return {
    type:'logout'
  }
}

const timeout = () => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(logout());
    },3600000)
  }
}
// const authfail = (erro) => {
//   return {
//     type:'authstart'
//
//   }
// }
export default postorder;
export {auth};
export {timeout};
