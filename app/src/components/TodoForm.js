import React, { useContext, useState } from 'react'
import { Stack, Box, Input, Button } from '@chakra-ui/core'
import Store from '../state/context'

export default function TodoForm() {
  const { dispatch } = useContext(Store)

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
    <Box ml="2vw" mt="2vh">
      <Input
        w='40vw'
        mb={2}
        value={todo}
        autoFocus={true}
        placeholder='Enter new todo'
        onKeyUp={handleSubmitForm}
        onChange={handleTodoChange}
      />

      <Button px={5} variantColor='facebook' onClick={handleTodoAdd}>
        Add Todo
      </Button>
    </Box>
  )
}
