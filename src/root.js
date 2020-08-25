import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'

import AuthProvider from './context/auth'
import App from './app'

const theme = createMuiTheme()

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default Root
