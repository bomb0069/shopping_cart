import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductCard from './modules/products/components/ProductDetailCard'

import { getShoppingCart, getFilters } from './modules/shoppingCart/actions'

import withShoppingCart from './modules/shoppingCart/hoc/withShoppingCart'

// Views
import ProductPage from './views/ProductPage'
import SearchResultsPage from './views/SearchResultsPage'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={withShoppingCart(ProductPage, getShoppingCart, getFilters)}
          exact
          path="/product"
        />
        <Route
          component={withShoppingCart(ProductCard, getShoppingCart, getFilters)}
          exact
          path="/productFilter"
        />
        <Route
          component={SearchResultsPage}
          exact
          path="/search-results"
        />
        <Redirect to="/product" />
      </Switch>
    )
  }
}
