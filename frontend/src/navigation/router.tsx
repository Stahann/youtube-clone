import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import ChannelDetails from '../pages/ChannelDetails'
import VideoDetails from '../pages/VideoDetails'
import SearchFeed from '../pages/SearchFeed'
import Feed from '../pages/Feed'
import Authentification, {
  action as authAction,
} from '../pages/Authentification'
import { action as logoutAction } from '../components/Logout'
import { tokenLoader } from '../utils/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { path: '/auth', element: <Authentification />, action: authAction },
      { path: '/logout', action: logoutAction },
      { path: ':category', element: <Feed /> },
      { path: '/video/:id', element: <VideoDetails /> },
      { path: '/channel/:id', element: <ChannelDetails /> },
      { path: '/search/:searchTerm', element: <SearchFeed /> },
    ],
  },
])
