import React from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    float: 'right',
    backgroundColor: 'lightgreen',
  },
}))

export default function NewPostButton() {
  const classes = useStyles()
  return (
    <Link to="/create">
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<PostAddIcon />}
      >
        Agregar nuevo post
      </Button>
    </Link>
  )
}
