import React, { useReducer, useContext } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../helpers/ProtectedRoutes'

import Store from '../state/context'
import reducer from '../state/reducer'

import { usePersistedContext, usePersistedReducer } from '../helpers/useLocalStorage'

import NavBar from './NavBar'
import SignoutNav from './SignoutNav'
import Login from './Login'
import Signup from './Signup'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), 'state')

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'todos' // The localStorage key
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
              <SignoutNav />
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
