import React, { useEffect } from 'react'

const Store = React.createContext({
  todos: [{ title: 'Add a todo', completed: false }],
})

export default Store
