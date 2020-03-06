import React from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../helpers/ProtectedRoutes'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import TodoList from './TodoList'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CSSReset />

        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Login />
          </Route>
          <Route path='/signup'>
            <NavBar />
            <Signup />
          </Route>
          <ProtectedRoute path='/todos'>
            <TodoList />
          </ProtectedRoute>
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
