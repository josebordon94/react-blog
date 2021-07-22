import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Fade } from '@material-ui/core/'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexFade: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}))

const Main = () => {
  const classes = useStyles()
  return (
    <Fade in={true} timeout={600}>
      <Paper className={classes.paper}>
        <Typography variant="h1" color="initial">
          Alkemy Blog
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          style={{ marginTop: '0.8em' }}
        ></Typography>
      </Paper>
    </Fade>
  )
}

export default Main
