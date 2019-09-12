import React from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectWithDropdown({
  handleChange,
  value
}) {
  const classes = useStyles();
  

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={"3-5"}>3-5</MenuItem>
          <MenuItem value={"6-8"}>6-8</MenuItem>
          <MenuItem value={"over8"}>over8</MenuItem>
          <MenuItem value={"Baby"}>Baby</MenuItem>
          <MenuItem value={"Toddler"}>Toddler</MenuItem>
        </Select>
      </FormControl>
      </form>
  );
}