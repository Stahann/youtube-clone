import { useState, useEffect, FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Card } from '@mui/material'

import Videos from '../components/Videos'
import { fetchFromAPI } from '../components/services/fetchFromAPI'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${location.pathname}`).then((data) =>
      setVideos(data.items)
    )
  }, [location])

  return (
    <>
      <Typography>
        {location.pathname.slice(1, 15).toUpperCase()} videos
      </Typography>
      <Videos videos={videos} />
    </>
  )
}

export default Feed
