import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../helpers/axiosWithAuth'
import { FormControl, Heading, Stack, Input, Button } from '@chakra-ui/core'

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
    axios()
      .post('https://wunderlist-2-0-be.herokuapp.com/api/auth/login', {
        email: loginValues.email,
        password: loginValues.password,
      })
      .then(res => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.user.id)
        localStorage.setItem("firstname", res.data.first_name)
        pageHistory.push('/todos')
      })
      .catch(err => console.error(err))
  }

  return (
    <Stack
      spacing={3}
      w='30vw'
      border='2px solid grey'
      p={4}
      ml='35vw'
      mt='12vh'>
      <Heading fontFamily='JetBrains Mono' textAlign='center'>
        Login
      </Heading>
      <form onSubmit={props.onSubmit}>
        <FormControl>
          <Stack spacing={5}>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              value={loginValues.email}
              onChange={handleChange}
            />
            <Input
              type='password'
              placeholder='Password'
              name='password'
              value={loginValues.password}
              onChange={handleChange}
            />
            <Button
              variantColor='teal'
              size='lg'
              tyep='submit'
              w='100%'
              onClick={handleSubmit}>
              Login
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Stack>
  )
}
