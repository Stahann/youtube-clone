import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export let theme = createTheme({
  palette: {
    primary: {
      main: red['A400'],
    },
    secondary: {
      main: '#edf2ff',
    },
    background: {
      default: '#000',
    },
  },
})
