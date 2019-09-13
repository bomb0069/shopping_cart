import React from 'react'
import classNames from 'classnames'
import { Paper, Grid, Button } from '@material-ui/core'

const ProductCard = ({
  imgUrl,
  id,
  name,
  gender,
  age,
  price,
  availability,
  handleOnClick,
  classes
}) => {
  const onClick = () => {
    handleOnClick(id)
  }
  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Grid item sm={12} >
            <img src={imgUrl} className={classes.image}/>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <p>Name: {name}</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>${price}</p>
          <p>{availability}</p>
        </Grid>
        <Grid item xs={4} className={classes.center}>
          <Button onClick={onClick} className={classes.button}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductCard
