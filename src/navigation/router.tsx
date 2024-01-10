import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import ChannelDetails from '../pages/ChannelDetails'
import VideoDetails from '../pages/VideoDetails'
import SearchFeed from '../pages/SearchFeed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/video/:id', element: <VideoDetails /> },
      { path: '/channel/:id', element: <ChannelDetails /> },
      { path: '/search/:searchTerm', element: <SearchFeed /> },
    ],
  },
])
