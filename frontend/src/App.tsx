import React from 'react'

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { router } from './navigation/router'

function App() {
  return <RouterProvider router={router} />
}

export default App
