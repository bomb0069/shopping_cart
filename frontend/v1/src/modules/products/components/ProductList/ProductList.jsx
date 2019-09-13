import React from 'react'
import Grid from '@material-ui/core/Grid'

import ProductCard from '../ProductCard'

const ProductList = ({
  productItems=[]
}) => {

  return (
    <Grid container spacing={5} style={{marginTop: '2em'}}>
      {productItems.map(item => (
        <Grid
          item
          xs={12}
          sm={4}
          key={'grid' + item.product_id}
        >
          <ProductCard
            key={item.product_id}
            {...item}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList