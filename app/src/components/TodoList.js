import React, { useState, useContext } from 'react'
import {
  Input,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/core'
import Store from '../state/context'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)

  return (
    <React.Fragment>
      {state.todos.map(t => (
        <Flex ml='30vw' key={t}>
          <IconButton
            mt={5}
            px={5}
            variantColor='red'
            aria-label='Mark complete'
            icon='check'
            onClick={() =>
              dispatch({ type: 'COMPLETE', payload: t })
            }></IconButton>
          <Text
            fontFamily='JetBrains Mono'
            height='42px'
            width="34vw"
            px={6}
            key={t}
            mt={5}
            mb={5}
            fontSize='2xl'>
            {t}
          </Text>
          <IconButton
            mt={5}
            variantColor='facebook'
            aria-label='Mark complete'
            icon='edit'
            onClick={() =>
              dispatch({ type: 'EDIT', payload: t })
            }></IconButton>
        </Flex>
      ))}
    </React.Fragment>
  )
}
