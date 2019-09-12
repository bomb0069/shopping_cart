import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Views
import {
    ProductPage
} from './views'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={ProductPage}
          exact
          path="/product"
        />
        <Redirect to="/product" />
      </Switch>
    )
  }
}
