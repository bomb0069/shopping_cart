import React from 'react'
import Grid from '@material-ui/core/Grid'

import ProductDetailCard from '../ProductDetailCard'

const ProductListDetailCard = ({
    productItems
}) => {
    return (
        <Grid container spacing={5} style={{marginTop: '2em'}}>
          {productItems.map(item => (
            <Grid
              item
              xs={12}
              sm={4}
              key={item.id}
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
