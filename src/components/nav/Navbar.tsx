import { FC } from 'react'
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
  AppBarProps,
} from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

import { logo } from '../../utils/constants'
import SearchBar from '../SearchBar'

interface INavbarProps {
  toggle: () => void
  open: boolean
}

interface StyledAppBarProps extends AppBarProps {
  open?: boolean
}

const drawerWidth = 240

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<StyledAppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Navbar: FC<INavbarProps> = ({ toggle, open }) => {
  return (
    <>
      <AppBarStyled position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={toggle}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{
              p: 2,
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt='logo' height={45} />
            </Link>
            <SearchBar />
          </Stack>
        </Toolbar>
      </AppBarStyled>
    </>
  )
}

export default Navbar
