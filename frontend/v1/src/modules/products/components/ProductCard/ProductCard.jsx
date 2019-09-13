import React from 'react'

import Grid from '@material-ui/core/Grid'

const ProductCard = ({
  imgUrl = 'https://www.mockuptiger.com/wp-content/uploads/2018/03/image-666.jpg',
  name,
  gender,
  age,
  price,
  availability
}) => {

  return (
    <Grid container>
      <Grid item sm={12}>
        <img src={imgUrl} />
      </Grid>

      <Grid item sm={8}>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
      </Grid>

      <Grid item sm={4}>
        <h5>${price}</h5>
        <h5>{availability}</h5>
      </Grid>
    </Grid>
  )
}

export default ProductCard