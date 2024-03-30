import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ConnectedApp from './App';
// import reportWebVitals from './reportWebVitals';
import { connect } from 'react-redux';
import { Provider } from'react-redux';
import combineReducers from'./reducers/index';
import {legacy_createStore } from 'redux';
import {getUsers} from './reducers/login';
import applyMiddleware from './middleware/index';
import { BrowserRouter,Routes,Router} from 'react-router-dom';
import store from './data/store';

// const store = legacy_createStore(combineReducers,applyMiddleware);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App store={store}/>
  // </React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);
