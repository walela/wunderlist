import React from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import TodoList from './TodoList'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CSSReset />
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/todos'>
            <TodoList />
          </Route>
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
