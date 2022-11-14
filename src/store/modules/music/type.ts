//轮播图类型
export interface IBanner {
  imageUrl: string
  targetId: number
  adid?: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress?: any
  monitorClick?: any
  monitorType?: any
  monitorImpressList?: any
  monitorClickList?: any
  monitorBlackList?: any
  extMonitor?: any
  extMonitorInfo?: any
  adSource?: any
  adLocation?: any
  adDispatchJson?: any
  encodeId: string
  program?: any
  event?: any
  video?: any
  song?: any
  scm: string
  bannerBizType: string
}

export interface IBannerObject {
  banners: IBanner[]
  code: number
}
//推荐歌单类型
export interface IPlaylist {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  coverImgUrl?: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface IPlaylistObject {
  hasTaste: boolean
  code: number
  category: number
  result: IPlaylistObject[]
}

//推荐MV数据
export interface Artist {
  id: number
  name: string
}

export interface IMvData {
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
  alias: string[]
}

export interface IMvDataObject {
  data: IMvData[]
  code: number
}
