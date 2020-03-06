import React, { useReducer, useEffect } from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
