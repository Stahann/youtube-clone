import React, { FC } from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'
import ChannelDetails from '../pages/ChannelDetails'
import { IChannel } from '../types/types'
import { IVideo } from '../types/types'

interface IChannelCardProps {
  channelDetail: IVideo
}

const ChannelCard: FC<IChannelCardProps> = (props) => {
  const { channelDetail } = props
  return (
    <>
      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
        }}
      >
        <Link to={`/channel/${channelDetail.snippet.channelId}`}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              src={channelDetail?.snippet?.channelTitle}
              sx={{
                display: 'flex',
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                paddingTop: '10px',
              }}
            />
            <Typography variant='h6'>
              {channelDetail?.snippet?.channelTitle}
            </Typography>
          </CardContent>
        </Link>
      </Box>
    </>
  )
}

export default ChannelCard
