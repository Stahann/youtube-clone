import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from '../components/Videos'
import { IVideo } from '../types/types'
import { fetchFromAPI } from '../components/services/fetchFromAPI'

const SearchFeed = () => {
  const [videos, setVideos] = useState<IVideo[]>([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  console.log(searchTerm)

  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        color='white'
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>

      <Box display='flex' justifyContent='center' alignItems='center'>
        {videos.length > 0 ? (
          <Videos videos={videos} />
        ) : (
          <Typography
            variant='h6'
            color='white'
            textAlign='center'
            mt={2}
            fontStyle='italic'
          >
            No results found for "{searchTerm}".
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default SearchFeed
