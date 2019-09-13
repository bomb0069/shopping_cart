import React from 'react'
import styles from './styles'
import { withStyles, Paper, Grid, Button } from '@material-ui/core'

const ProductCard = () => {
    return (
        <Paper>
            <Grid container spacing={1}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Button>
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles) (ProductCard)
