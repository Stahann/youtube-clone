import { FC } from 'react'
import { IChannel } from '../pages/ChannelDetails'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture } from '../utils/constants'

import VideoCard from './VideoCard'
import { CheckCircle } from '@mui/icons-material'

interface IChannelDetailsCardProps {
  channelDetail: IChannel
}

const ChannelDetailsCard: FC<IChannelDetailsCardProps> = (props) => {
  const { channelDetail } = props
  return (
    <>
      <Box
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
        }}
      >
        <CardContent
          sx={{
            marginTop: '-95px',
            display: 'flex',
            alignItems: 'center',
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
            src={channelDetail?.snippet?.title}
            sx={{
              display: 'flex',
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              paddingTop: '10px',
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: 'gray',
                ml: '5px',
              }}
            />
          </Typography>
        </CardContent>
      </Box>
    </>
  )
}

export default ChannelDetailsCard
