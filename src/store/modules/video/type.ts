export interface Artist {
  id: number
  name: string
  alias: string[]
  transNames?: any
}

export interface IVideoList {
  id: number
  cover: string
  name: string
  playCount: number
  briefDesc?: any
  desc?: any
  artistName: string
  artistId: number
  duration: number
  mark: number
  subed: boolean
  artists: Artist[]
}

export interface IVideoListResult {
  count: number
  hasMore: boolean
  data: IVideoList[]
  code: number
}
export interface IData {
  area?: string
  type?: string
  limit?: number
  offset?: number
}
