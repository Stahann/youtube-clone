import { TextField, Button, Typography, Box } from '@mui/material'
import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom'

import classes from './AuthForm.module.css'
import React from 'react'

interface IMyData {
  errors?: { [key: string]: string }
  message?: string
}

const AuthForm = () => {
  const data = useActionData() as IMyData
  const navigation = useNavigation()

  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form
      method='post'
      className={classes.form}
      style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '20px',
      }}
    >
      <Typography variant='h5' sx={{ color: 'black' }}>
        {isLogin ? 'Log in' : 'Create a new user'}
      </Typography>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err: any) => (
            <li key={err} style={{ color: 'red' }}>
              {err}
            </li>
          ))}
        </ul>
      )}
      {data && data.message && (
        <p style={{ color: 'red', paddingLeft: '40px' }}>{data.message}</p>
      )}
      <Box sx={{ paddingTop: '15px' }}>
        <TextField
          label='Email'
          id='email'
          type='email'
          name='email'
          required
          className={classes.input}
        />
      </Box>
      <Box sx={{ paddingTop: '15px' }}>
        <TextField
          label='Password'
          id='password'
          type='password'
          name='password'
          required
          className={classes.input}
        />
      </Box>
      <div className={classes.actions}>
        <Link
          to={`?mode=${isLogin ? 'signup' : 'login'}`}
          style={{ color: 'black' }}
        >
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Save'}
        </Button>
      </div>
    </Form>
  )
}

export default AuthForm
