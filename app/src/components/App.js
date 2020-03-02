import React, { useReducer, useEffect } from 'react'
import { ThemeProvider, CSSReset, Heading } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Heading textAlign='center'>yo</Heading>
    </ThemeProvider>
  )
}

export default App
