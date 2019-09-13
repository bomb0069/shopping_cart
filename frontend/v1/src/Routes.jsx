import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductCard from './modules/products/components/ProductDetailCard'

import ProductPage from './views/ProductPage'
import SearchResultsPage from './views/SearchResultsPage'

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
