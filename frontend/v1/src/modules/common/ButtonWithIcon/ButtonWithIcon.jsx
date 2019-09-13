import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons'

const ButtonWithIcon = ({ classes, id, amount, icon, onClick }) => {
  return (
    <IconButton 
      id={id}
      onClick={onClick} 
      className={classes.button} 
      disableRipple 
      aria-label="delete"
    >
      <Badge badgeContent={amount} 
        invisible={amount === 0 ? true : false} 
        color="secondary"
      >
        {icon ? icon : <ShoppingCartIcon/>}
      </Badge>
    </IconButton>
  )
}

export default (ButtonWithIcon)

