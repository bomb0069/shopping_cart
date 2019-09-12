import React, { useState } from 'react'
import {withStyles, Paper, Grid} from '@material-ui/core'
import styles from './styles'
import ButtonWithIcon from '../ButtonWithIcon'
import SelectWithDropdown from '../SelectWithDropdown'
import SearchInput from '../searchInput'

const Header = ({classes, amount}) => {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = event => {
    setSearchValue(event.target.value)
  }
  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SelectWithDropdown/>
            </Grid>
            <Grid item xs={12}>
              <SearchInput id={'search-field'} value={searchValue} handleChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{justifyContent: 'flex-end'}} >
          <ButtonWithIcon amount={amount ? amount : 0}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Header)
