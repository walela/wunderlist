import React, { useContext, useState } from 'react'
import { Box, Input, Button } from '@chakra-ui/core'
import Store from '../state/context'
import axios from '../helpers/axiosWithAuth'


export default function TodoForm() {
  const { dispatch } = useContext(Store)

  const [todo, setTodo] = useState('')

  function handleTodoChange(e) {
    setTodo(e.target.value)
  }

  const userId = localStorage.getItem('userId')

  function handleTodoAdd() {
    axios()
      .post(
        `https://wunderlist-2-0-be.herokuapp.com/api/todo/users/${userId}/tasks`,
        { title: todo, completed: 'false' }
      )
      .then(res => {
        const newTodo = { title: res.data.title, completed: res.data.completed }
        dispatch({ type: 'ADD_TODO', payload: newTodo })
      })
      .catch(err => console.error(err))
    setTodo('')
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd()
  }

  return (
    <Box ml='30vw' mt='4vh'>
      <Input
        variant='flushed'
        w='40vw'
        mb={2}
        value={todo}
        autoFocus={true}
        placeholder='What needs to be done?'
        onKeyUp={handleSubmitForm}
        onChange={handleTodoChange}
      />

      <Button px={5} variantColor='facebook' onClick={handleTodoAdd}>
        Add Todo
      </Button>
    </Box>
  )
}
