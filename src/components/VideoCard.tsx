import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { IVideo } from './Videos'
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants'

interface IVideosCardProps {
  video: IVideo
}

const VideoCard: FC<IVideosCardProps> = (props) => {
  const { video } = props

  return (
    <>
      <Card
        sx={{
          width: { xs: '100%', sm: '358px', md: '320px' },
          boxShadow: 'none',
          borderRadius: 3,
        }}
      >
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <CardMedia
            image={video.snippet?.thumbnails?.high?.url}
            src={video.snippet?.title}
            sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
          <Link
            to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
          >
            <Typography variant='subtitle1' fontWeight='bold'>
              {video?.snippet?.title.slice(0, 60) ||
                demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              video.snippet.channelId
                ? `/channel/${video.snippet.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {video?.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{
                  fontSize: 12,
                  color: 'gray',
                  ml: '5px',
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  )
}

export default VideoCard
