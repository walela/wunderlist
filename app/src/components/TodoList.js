import React, { useState, useEffect, useContext } from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/core'
import axios from '../helpers/axiosWithAuth'
import Store from '../state/context'
import uuid from 'react-uuid'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)
  const [todos, setTodos] = useState([])

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    axios()
      .get(
        `https://wunderlist-2-0-be.herokuapp.com/api/todo/users/${userId}/tasks`
      )
      .then(res => {
        console.log(res.data)
        res.data.forEach(todo => {
          const newTodo = { title: todo.title, completed: todo.completed }
          dispatch({ type: 'ADD_TODO', payload: newTodo })
        })
      })
      .catch(err => console.error(err))
  }, [userId])

  return (
    <React.Fragment>
      {state.todos.map(t => (
        <Flex ml='30vw' key={uuid()}>
          <IconButton
            mt={5}
            px={5}
            variantColor='red'
            aria-label='Mark complete'
            icon='check'
            onClick={e => {
              e.preventDefault()
              axios().delete(`https://wunderlist-2-0-be.herokuapp.com/api/todo/tasks/${t.id}`)
              dispatch({ type: 'COMPLETE', payload: t })
            }}></IconButton>
          <Text
            fontFamily='JetBrains Mono'
            height='42px'
            width='34vw'
            px={6}
            key={t}
            mt={5}
            mb={2}
            fontSize='2xl'>
            {t.title}
          </Text>
          <IconButton
            mt={2}
            variantColor='facebook'
            aria-label='Mark complete'
            icon='edit'
            onClick={() => dispatch({ type: 'EDIT', payload: t })}></IconButton>
        </Flex>
      ))}
    </React.Fragment>
  )
}
