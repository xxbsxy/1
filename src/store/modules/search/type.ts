//搜素音乐结果
export interface Artist {
  id: number
  name: string
  picUrl?: any
  alias: any[]
  albumSize: number
  picId: number
  fansGroup?: any
  img1v1Url: string
  img1v1: number
  trans?: any
}

export interface Artist {
  id: number
  name: string
  picUrl?: any
  alias: any[]
  albumSize: number
  picId: number
  fansGroup?: any
  img1v1Url: string
  img1v1: number
  trans?: any
}

export interface Album {
  id: number
  name: string
  artist: Artist
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: number
  mark: number
}

export interface ISong {
  id: number
  name: string
  artists: Artist[]
  album: Album
  duration: number
  copyrightId: number
  status: number
  alias: any[]
  rtype: number
  ftype: number
  mvid: number
  fee: number
  rUrl?: any
  mark: number
}

export interface Result {
  songs: ISong[]
  hasMore: boolean
  songCount: number
}

export interface ISongObject {
  result: Result
  code: number
}
//mv数据
export interface MvArtist {
  id: number
  name: string
  alias: string[]
  transNames?: any
}

export interface IMv {
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
  arTransName: string
  artists: MvArtist[]
  transNames?: any
  alias?: any
  alg: string
}

export interface MvResult {
  hlWords?: any
  mvCount: number
  mvs: IMv[]
}

export interface IMvObject {
  result: MvResult
  code: number
}
