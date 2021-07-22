import React from 'react'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    float: 'right',
    backgroundColor: 'orange',
  },
}))

export default function NewPostButton() {
  const classes = useStyles()
  return (
    <Link to="/">
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<KeyboardReturnIcon />}
      >
        Volver
      </Button>
    </Link>
  )
}
