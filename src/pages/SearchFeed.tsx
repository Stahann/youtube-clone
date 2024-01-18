import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos, { IVideo } from '../components/Videos'
import { fetchFromAPI } from '../components/services/fetchFromAPI'

const SearchFeed = () => {
  console.log('SearchFeed')

  const [videos, setVideos] = useState<IVideo[]>([])
  const { searchTerm } = useParams()
  // TODO: useParams not working need to fix

  console.log('params', searchTerm)

  useEffect(() => {
    debugger
    fetchFromAPI(`search?part=snippet&q=`).then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        color='white'
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>

      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {videos.length > 0 ? (
          <Videos videos={videos} />
        ) : (
          <Typography variant='h6' color='white'>
            {/* No results found for "{searchTerm}". */}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
export default SearchFeed
