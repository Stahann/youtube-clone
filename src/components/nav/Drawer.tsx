import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { useLocation, useNavigate } from 'react-router-dom'

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
  Typography,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Navbar from './Navbar'
import { categories } from '../../utils/constants'
import path from 'path'

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

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavButtonClick = (path: string) => {
    navigate(path)
  }

  console.log(location)
  console.log(navigate)

  return (
    <>
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
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  selected={category.path === location.pathname}
                  // sx={{
                  //   bgcolor:
                  //     category.path === location.pathname ? 'red' : 'unset',
                  // }}
                  onClick={() => handleNavButtonClick(category.path || '/')}
                >
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ color: 'secondary' }}
                    primary={category.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  )
}

// import * as React from 'react'
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import MuiDrawer from '@mui/material/Drawer'
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar'
// import List from '@mui/material/List'
// import CssBaseline from '@mui/material/CssBaseline'
// import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import MailIcon from '@mui/icons-material/Mail'
// import Navbar from './Navbar'
// import { categories } from '../../utils/constants'
// import { useLocation, useNavigate } from 'react-router-dom'

// const drawerWidth = 240

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// })

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// })

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }))

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }))

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }))

// interface IPersistentDrawerProps {
//   open: boolean
//   toggle: () => void
// }

// export function PersistentDrawer({ open, toggle }: IPersistentDrawerProps) {
//   const theme = useTheme()
//   const location = useLocation()
//   const navigate = useNavigate()

//   const handleNavButtonClick = (path: string) => {
//     navigate(path)
//   }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Navbar open={open} toggle={toggle} />
//       <Drawer
//         PaperProps={{ sx: { bgcolor: 'background.default' } }}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant='persistent'
//         anchor='left'
//         open={open}
//       >
//         <Drawer variant='permanent' open={open}>
//           <DrawerHeader>
//             <IconButton onClick={toggle} color='secondary'>
//               {theme.direction === 'rtl' ? (
//                 <ChevronRightIcon />
//               ) : (
//                 <ChevronLeftIcon />
//               )}
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List sx={{ pl: 2 }}>
//             {categories.map((category, index) => (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton
//                   selected={category.path === location.pathname}
//                   onClick={() => handleNavButtonClick(category.path || '/')}
//                 >
//                   <ListItemIcon sx={{ color: 'primary.main' }}>
//                     {category.icon}
//                   </ListItemIcon>
//                   <ListItemText
//                     primaryTypographyProps={{ color: 'secondary' }}
//                     primary={category.name}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Drawer>
//       </Drawer>
//     </Box>
//   )
// }
