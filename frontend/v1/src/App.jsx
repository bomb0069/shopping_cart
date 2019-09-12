import React from 'react';
import logo from './logo.svg';
import './App.css';
import WithShoppingCart from './modules/shoppingCart/hoc/withShoppingCart'
import Routes from './Routes'
import { Router } from 'react-router-dom'
import {
  createBrowserHistory
} from 'history'


function App({ data }) {
  console.log('props', data)
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </>
  )
}

export default WithShoppingCart(App);
