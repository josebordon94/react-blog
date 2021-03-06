// import { createTheme } from '@material-ui/core/styles'
import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core'
import { red, grey, blueGrey, blue, brown } from '@material-ui/core/colors'
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
      textAlign: 'left',
      marginBottom: '0.4em',
      marginTop: '0.8em',
    },
  },
  palette: {
    background: {
      default: grey[200],
    },
    primary: {
      main: brown[900],
    },
    secondary: {
      main: red[800],
    },
    text: {
      secondary: grey[800],
    },
  },
})
export default theme
