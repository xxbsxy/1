import myRequest from './api'

interface IData {
  cat?: string
  limit?: number
  offset?: number
}

export function getTopPlaylist(data: IData) {
  return myRequest.request({
    url: '/top/playlist',
    params: data
  })
}
