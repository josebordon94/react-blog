import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './ThemeUI'
import Container from './components/Container'
import { LangProvider } from './context/langContext'

function App() {
  return (
    <LangProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container />
      </ThemeProvider>
    </LangProvider>
  )
}

export default App
