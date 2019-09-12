import React from 'react'
import { 
  TextField,
  withStyles,
  IconButton,
  Grid
} from '@material-ui/core'
import style from './styles'
import SearchIcon from '@material-ui/icons/Search'

const searchInput = ({
  classes,
  handleChange,
  handleClick,
  value,
  id
}) => {
    return (
      <Grid container>
        <Grid item xs={9}>
          <TextField
            id={id}
            label="Search field"
            type="search"
            fullWidth
            className={classes.textField}
            onChange={handleChange}
            value={value}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3} className={classes.center}>
          <IconButton 
            color="primary" 
            className={classes.button}
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
}

export default withStyles(style)(searchInput)
