import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { Form } from 'react-router-dom'

import classes from './AuthForm.module.css'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin)
  }

  return (
    <Form method='post' className={classes.form}>
      <Typography variant='h5'>
        {isLogin ? 'Log in' : 'Create a new user'}
      </Typography>
      <p>
        <TextField
          label='Email'
          id='email'
          type='email'
          name='email'
          required
          className={classes.input}
        />
      </p>
      <p>
        <TextField
          label='Password'
          id='password'
          type='password'
          name='password'
          required
          className={classes.input}
        />
      </p>
      <div className={classes.actions}>
        <Button
          onClick={switchAuthHandler}
          className={classes.button}
          type='button'
        >
          {isLogin ? 'Create new user' : 'Login'}
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          type='submit'
        >
          Save
        </Button>
      </div>
    </Form>
  )
}

export default AuthForm
