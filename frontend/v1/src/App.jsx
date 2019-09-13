import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import { Router } from 'react-router-dom'
import {
  createBrowserHistory
} from 'history'

function App() {
  return (
    <>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </>
  )
}

export default App;
