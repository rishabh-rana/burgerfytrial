import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Store/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <Fragment>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </Fragment>

)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
