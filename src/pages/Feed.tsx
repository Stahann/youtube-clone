import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'

import Videos from '../components/Videos'
import { fetchFromAPI } from '../components/services/fetchFromAPI'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${location.pathname}`)
  }, [location])

  return (
    <>
      <Typography sx={{ color: 'secondary.main' }}>New videos</Typography>
      <Videos />
    </>
  )
}

export default Feed
