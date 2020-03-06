import React, { useReducer, useEffect } from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <ThemeProvider>
          <CSSReset />
          <Login />
        </ThemeProvider>
      </Route>
    </Switch>
  )
}

export default App
