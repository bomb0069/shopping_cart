import React from 'react'
import Grid from '@material-ui/core/Grid'

import ProductCard from '../ProductCard'

const ProductList = ({
  productItems = []
}) => {

  return (
    <Grid container spacing={5}>
      {productItems.map(item => (
        <Grid
          item
          xs={12}
          sm={4}
          key={item.id}
        >
          <ProductCard
            
            {...item}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList