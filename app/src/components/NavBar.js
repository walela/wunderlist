import React from 'react'
import { Button, Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex
      w='100%'
      px={5}
      py={2}
      borderBottom='1px solid teal'
      boxShadow='2px 4px 4px grey'
      justifyContent='space-between'
      alignItems='center'>
      <Flex flexDirection='row' justifyContent='center' alignItems='center'>
        <Image
          src='https://image.flaticon.com/icons/svg/1507/1507749.svg'
          size={30}
        />
        <Text pl={3} color='facebook' fontFamily='Lobster Two' fontSize={36}>
          wunderlist
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
