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
      <Box>
        <Drawer open={open} toggle={toggleDrawer} />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  )
}

export default RootLayout
