import React from 'react'
import Grid from '@material-ui/core/Grid'

import ProductDetailCard from '../ProductDetailCard'

const ProductListDetailCard = ({
  productItems
}) => {
  return (
    <Grid
      container
      spacing={5}
      style={{marginTop: '2em'}}
    >
      {productItems.map(item => (
        <Grid
          item
          key={item.id}
          sm={4}
          xs={12}
        >
          <ProductDetailCard
                
            {...item}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductListDetailCard
