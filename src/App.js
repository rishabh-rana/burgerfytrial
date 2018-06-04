import React, { Component } from 'react';
import Layout from './Components/Layout/layout';
import BurgerPage from './Containers/BurgerPage/burgerpage';
import Auth from './Containers/Auth/auth';
import {Route} from 'react-router-dom';
import Checkout from './Containers/Checkout/checkout';
import Orders from './Containers/Orders/orders';

class App extends Component {


  render() {

    return (

        <Layout>
          <Route path='/' exact component={BurgerPage} />
          <Route path='/checkout'  component={Checkout} />
          <Route path='/orders'  component={Orders} />
          <Route path='/signup'  component={Auth} />

        </Layout>


    );
  }
}

export default App;
