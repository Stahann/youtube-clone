import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'
import Navbar from '../components/nav/Navbar'
import Drawer from '../components/nav/Drawer'
import { Main } from '../components/nav/Main'

const RootLayout = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => setOpen(!open)

  return (
    <>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Drawer open={open} toggle={toggleDrawer} />
        <Main
          sx={{
            bgcolor: 'tomato',
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
