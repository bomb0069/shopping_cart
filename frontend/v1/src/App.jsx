import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import { Router } from 'react-router-dom'
import {
  createBrowserHistory
} from 'history'
import { getShoppingCart } from './modules/shoppingCart/actions'

import WithShoppingCart from './modules/shoppingCart/hoc/withShoppingCart'

function App() {
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </>
  )
}

export default WithShoppingCart(App, getShoppingCart);
