import { Stack, Box } from '@mui/material'
import { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

interface IVideosProps {
  videos: IVideo[]
}

export type Thumbnails = {
  default: {
    url: string
  }
  high: {
    url: string
  }
  medium: {
    url: string
  }
}

export interface IVideo {
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: string
    publishedAt: string
    title: string

    thumbnails: Thumbnails
  }
}

const channel = 'youtube#channel'

const Videos: FC<IVideosProps> = (props) => {
  console.log(props.videos)

  return (
    <>
      <Grid container rowSpacing={5}>
        {props.videos.map((item, idx) => (
          <Grid
            xs={12}
            sm={4}
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item.id.kind === channel ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <ChannelCard channelDetail={item} />
              </Box>
            ) : (
              <VideoCard video={item} />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Videos
