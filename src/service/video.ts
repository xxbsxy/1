import myRequest from './api'

interface IData {
  area?: string
  type?: string
  limit?: number
  offset?: number
}
// 获得视频分类
export function getVideoAll(data: IData) {
  return myRequest.request({
    url: '/mv/all',
    params: data
  })
}
// 获得视频 Url
export function getVideoUrl(id: number) {
  return myRequest.request({
    url: '/mv/url',
    params: {
      id
    }
  })
}
// 获得视频详情
export function getVideoDetail(mvid: number) {
  return myRequest.request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}
// 获得相似MV
export function getVideoSimilar(mvid: number) {
  return myRequest.request({
    url: '/simi/mv',
    params: {
      mvid
    }
  })
}
