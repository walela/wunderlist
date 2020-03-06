import React, { useContext } from 'react'
import { Stack, Box, Flex, Heading, Button, Text } from '@chakra-ui/core'
import Store from '../state/context'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)
  console.log(state)

  return (
    <React.Fragment>
      {state.todos.map(t => (
        <Flex ml="2vw">
          <Text fontFamily="JetBrains Mono" px={5} backgroundColor="lightgrey" key={t} mt={5} mb={5} mr={5} fontSize='2xl'>
            {t}
          </Text>

          <Button
            variantColor='linkedin'
            px={5}
            mt={5}
            onClick={() => dispatch({ type: 'COMPLETE', payload: t })}>
            Complete
          </Button>
        </Flex>
      ))}
    </React.Fragment>
  )
}
