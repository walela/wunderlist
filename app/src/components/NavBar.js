import React from 'react'
import { Button, Box, Flex, Image, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

const NavLink = ({ children, ...props }) => (
  <Link px={2} color='indigo' {...props}>
    {children}
  </Link>
)

const NavBar = () => {
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
      <Box>

        <Button variantColor='facebook' mx={3} as={Link} to='/'>
          Login
        </Button>

        <Button variantColor='linkedin' mx={3} as={Link} to='signup'>
          Sign Up
        </Button>
      </Box>
    </Flex>
  )
}

export default NavBar
