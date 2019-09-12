import React, { useState } from 'react'
import {withStyles, Paper, Grid} from '@material-ui/core'
import styles from './styles'
import ButtonWithIcon from '../ButtonWithIcon'
import SelectWithDropdown from '../SelectWithDropdown'
import SearchInput from '../SearchInput'

const Header = ({classes, amount, handleSubmit}) => {
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('')
  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }
  const [age, setAge] = React.useState('')
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  const handleSearch = () => {
    handleSubmit(searchValue, filter, age)
  }


  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SelectWithDropdown handleChange={handleAgeChange} value={age} />
            </Grid>
            <Grid item xs={12}>
              <SearchInput id={'search-field'} value={searchValue} handleChange={handleSearchChange} handleButtonClick={handleSearch} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{justifyContent: 'flex-end'}} >
          <ButtonWithIcon amount={amount ? amount : 0} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Header)