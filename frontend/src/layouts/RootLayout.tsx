import React, { useEffect } from 'react'
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom'

import { Box } from '@mui/material'
import Drawer from '../components/nav/Drawer'
import { Main } from '../components/nav/Main'
import { getTokenDuration } from '../utils/auth'

const RootLayout = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => setOpen(!open)

  const token = useLoaderData()
  const submit = useSubmit()

  useEffect(() => {
    if (!token) {
      return
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' })
      return
    }

    const tokenDuration = getTokenDuration()
    console.log(tokenDuration)

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, tokenDuration)
  }, [token, submit])

  return (
    <>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Drawer open={open} toggle={toggleDrawer} />
        <Main
          sx={{
            display: '-ms-flexbox',
            color: 'secondary.main',
            flexGrow: '1',
            padding: '24px',
            marginLeft: open ? '0px' : '-240px',
          }}
        >
          <Outlet />
        </Main>
      </Box>
    </>
  )
}

export default RootLayout
