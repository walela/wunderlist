import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Box, FormControl, Stack, Input, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'

const StyledLogin = styled.div`
  width: 240px;
  margin: 0 auto;
`

export default function Login(props) {
  const initialValues = {
    email: '',
    password: '',
  }
  const [loginValues, setLoginValues] = useState(initialValues)
  const pageHistory = useHistory()

  const handleChange = e => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    axios
      .post(
        'https://save-all-the-animals.herokuapp.com/api/auth/login',
        {
          email: loginValues.email,
          password: loginValues.password,
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res.data)
        if (res.data.type === 1 || res.data.type === 2) {
          pageHistory.push('/campaigns')
        }
      })
      .catch(err => console.error(err))
    setLoginValues(initialValues)
  }

  return (
    <React.Fragment>
      <NavBar page='login' />
      <StyledLogin>
        <Box
          w='25vw'
          border='1px'
          borderRadius='md'
          p={4}
          color='black'
          borderColor='grey'>
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <form onSubmit={props.onSubmit}>
            <FormControl>
              <Stack spacing={3}>
                <Input
                  type='email'
                  placeholder='email'
                  name='email'
                  value={loginValues.email}
                  onChange={handleChange}
                />
                <Input
                  type='password'
                  placeholder='password'
                  name='password'
                  value={loginValues.password}
                  onChange={handleChange}
                />
                <Button
                  variantColor='teal'
                  m={2}
                  size='lg'
                  tyep='submit'
                  onClick={handleSubmit}>
                  Login
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Box>
      </StyledLogin>
    </React.Fragment>
  )
}
