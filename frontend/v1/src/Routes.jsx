import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductCard from './modules/products/components/ProductDetailCard'

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
        <Route
          component={ProductCard}
          exact
          path="/productFilter"
        />
        <Redirect to="/product" />
      </Switch>
    )
  }
}
