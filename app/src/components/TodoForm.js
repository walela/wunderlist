import React, { useContext, useState } from 'react'
import Store from '../state/context'

export default function TodoForm() {
  const { dispatch } = useContext(Store)

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState('')

  function handleTodoChange(e) {
    setTodo(e.target.value)
  }

  function handleTodoAdd() {
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd()
  }

  return (
    <div>
      <div>
        <br />
        <div>
          <input
            value={todo}
            autoFocus={true}
            placeholder='Enter new todo'
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <div>
            <button onClick={handleTodoAdd}>
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
