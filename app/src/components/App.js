import React, { useReducer, useContext } from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../helpers/ProtectedRoutes'

import Store from '../state/context'
import reducer from '../state/reducer'
import { usePersistedContext, usePersistedReducer } from '../state/useLocalStorage'

import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const globalStore = usePersistedContext(useContext(Store), 'state')

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state' // The localStorage key
  )

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
            <Store.Provider value={{ state, dispatch }}>
              <TodoForm />
              <TodoList />
            </Store.Provider>
          </ProtectedRoute>
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
