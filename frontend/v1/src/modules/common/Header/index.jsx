import React from 'react'
import {withStyles, Paper} from '@material-ui/core'
import styles from './styles'
import ButtonWithIcon from '../ButtonWithIcon'

const Header = ({classes}) => {
    return (
        <div className={classes.root}>
            <Paper>
            <ButtonWithIcon amount={0}/>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Header)
