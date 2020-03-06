import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ children, ...rest }) {
  const token = localStorage.getItem('token')
  return <Route {...rest}>{token ? children : <Redirect to='/' />}</Route>
}

export default ProtectedRoute
