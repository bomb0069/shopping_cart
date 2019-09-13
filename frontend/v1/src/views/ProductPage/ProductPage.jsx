import React from 'react'
import Header from '../../modules/common/Header'
import ProductList from '../../modules/products/components/ProductList'

const ProductPage = ({
  userShoppingCart,
  filters
}) => {

  console.log('productPageProps:', userShoppingCart, filters)
  return (
    <div>
      <Header filters={filters} />
    </div>
  )
}

export default ProductPage