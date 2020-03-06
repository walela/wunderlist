import React from 'react'
import { Button, Box, Flex, Image, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const firstName = localStorage.getItem('firstname') ?? 'User'

  let handleSignout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('todos')
    localStorage.removeItem('userId')
  }
  return (
    <Flex
      bg='lightskyblue'
      w='100%'
      px={5}
      py={4}
      justifyContent='space-between'
      alignItems='center'>
      <Flex flexDirection='row' justifyContent='center' alignItems='center'>
        <Image
          src='https://image.flaticon.com/icons/svg/1507/1507749.svg'
          size={30}
        />
        <Text pl={3} color='black' fontFamily='JetBrains Mono' fontSize={30}>
          Wunderlist
        </Text>
      </Flex>
      <Text
        fontSize={24}
        textDecoration='underline'
        fontFamily='Fira Code'
        textColor='red'>
        {firstName}
      </Text>
      <Box>
        <Button
          variantColor='whatsapp'
          mx={3}
          as={Link}
          to='/'
          onClick={handleSignout}>
          Sign Out
        </Button>
      </Box>
    </Flex>
  )
}

export default NavBar
