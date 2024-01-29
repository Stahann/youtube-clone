import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import Videos from '../components/Videos'
import { fetchFromAPI } from '../components/services/fetchFromAPI'
import { IVideoDetail } from '../types/types'
import { IVideo } from '../types/types'

const VideoDetails = () => {
  const [videos, setVideos] = useState<IVideo[]>([])
  const [videoDetail, setVideoDetail] = useState<IVideoDetail>()
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  console.log('videos', videos)

  // console.log('videoDetail', videoDetail)

  return (
    <>
      <Box minHeight='95vh'>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className='react-player'
                controls
              />
              <Typography
                variant='h5'
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                {videoDetail?.snippet.title}
              </Typography>
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ color: '#fff', py: '1', px: '2', pt: '15px' }}
              >
                <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                  <Typography variant='subtitle1' color='#fff'>
                    {videoDetail?.snippet.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: '12px', color: 'grey', ml: '5px' }}
                    />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetail?.statistics.viewCount || '0'
                    ).toLocaleString()}{' '}
                    views
                  </Typography>

                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetail?.statistics.likeCount || '0'
                    ).toLocaleString()}{' '}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  )
}

export default VideoDetails
