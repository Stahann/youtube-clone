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

export interface IVideoDetail {
  contentDetails: {
    caption: string
    definition: string
    dimension: string
    duration: string
    licensedContent: boolean
    projection: string
  }
  id: string
  kind: string
  snippet: {
    categoryId: string
    channelId: string
    channelTitle: string
    defaultAudioLanguage: string
    defaultLanguage: string
    description: string
    liveBroadcastContent: string
    localized: {
      description: string
      title: string
    }
    publishedAt: string
    tags: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
      16: string
      17: string
      18: string
      19: string
      20: string
      21: string
      22: string
      23: string
      24: string
      25: string
    }
    thumbnails: {
      default: {
        height: number
        url: string
        width: number
      }
      high: {
        height: number
        url: string
        width: number
      }
      maxres: {
        height: number
        url: string
        width: number
      }
      medium: {
        height: number
        url: string
        width: number
      }
      standard: {
        height: number
        url: string
        width: number
      }
    }
    title: string
  }
  statistics: {
    commentCount: string
    favoriteCount: string
    likeCount: string
    viewCount: string
  }
}
