import React from 'react'

const Store = React.createContext({
  todos: [
    'Learn React',
    'Learn Redux',
    'Learn Context',
  ],
})

export default Store
