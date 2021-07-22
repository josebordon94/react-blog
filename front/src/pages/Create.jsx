import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function Create() {
  const classes = useStyles()

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Container>
      <div className={classes.paper}>
        <Typography component="h1" variant="h1">
          Crear un nuevo post
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete="fname"
            name="title"
            variant="outlined"
            fullWidth
            id="firstName"
            label="Título"
            autoFocus
            className={classes.input}
          />

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            fullWidth
            name="content"
            label="Password"
            type="text"
            id="password"
            multiline
            rows={8}
            className={classes.input}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar nuevo post
          </Button>
        </form>
      </div>
    </Container>
  )
}
