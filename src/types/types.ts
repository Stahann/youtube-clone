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
