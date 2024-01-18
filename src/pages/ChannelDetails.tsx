import { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

import { fetchFromAPI } from '../components/services/fetchFromAPI'
import { Thumbnails } from '../components/Videos'
import ChannelDetailsCard from '../components/ChannelDetailsCard'
import VideoCard from '../components/VideoCard'
import { IVideo } from '../components/Videos'

export interface IChannel {
  brandingSettings: {
    channel: {
      country: string
      description: string
      keywords: string
      title: string
      trackingAnalyticsAccountId: string
      unsubscribedTrailer: string
    }
    image: {
      bannerExternalUrl: string
    }
  }
  contentDetails: {
    relatedPlaylists: {
      likes: string
      uploads: string
    }
  }
  snippet: {
    country: string
    customUrl: string
    description: string
    publishedAt: string
    title: string
    localized: {
      description: string
      title: string
    }
    thumbnails: Thumbnails
  }
  statistics: {
    hiddenSubscriberCount: boolean
    subscriberCount: string
    videoCount: string
    viewCount: string
  }
  id: string
  kind: string
}

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState<IChannel | null>(null)
  const [videos, setVideos] = useState<IVideo[]>([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    )

    fetchFromAPI(`search?part=snippet&q=${id}`).then((data) =>
      setVideos(data.items)
    )
  }, [id])

  console.log('videos', videos)
  console.log('channelDetail', channelDetail)

  return (
    <>
      <Box minHeight='70vh'>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(112,5,5,1) 45%, rgba(255,171,0,1) 100%)',
            zIndex: 1,
            height: '300px',
          }}
        />
        {channelDetail && <ChannelDetailsCard channelDetail={channelDetail} />}
      </Box>
      <Box
        sx={{
          paddingLeft: '15px',
        }}
      >
        <Grid container spacing={4}>
          {videos.map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <VideoCard video={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ChannelDetails
