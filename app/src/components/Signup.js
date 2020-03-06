import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { FormControl, Stack, Input, Button } from '@chakra-ui/core'

function Signup(props) {
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
        'https://wunderlist-2-0-be.herokuapp.com/',
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
    <Stack
      spacing={3}
      w='30vw'
      border='2px solid grey'
      p={4}
      ml='35vw'
      mt='12vh'>
      <h1>Sign Up</h1>
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

export default Signup