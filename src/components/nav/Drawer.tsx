import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

import {
  Box,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Navbar from './Navbar'
import { categories } from '../../utils/constants'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface IPersistentDrawerProps {
  open: boolean
  toggle: () => void
}

export default function PersistentDrawer({
  open,
  toggle,
}: IPersistentDrawerProps) {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} toggle={toggle} />
      <Drawer
        PaperProps={{ sx: { bgcolor: 'background.default' } }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={toggle} color='secondary'>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ pl: 2 }}>
          {categories.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ color: 'secondary' }}
                  primary={text.name}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
