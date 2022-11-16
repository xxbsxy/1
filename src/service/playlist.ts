import myRequest from './api'

//获得歌单详情
export function getPlaylistDetail(id: string) {
  return myRequest.request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
//获得歌曲详情
export function getSongDetail(ids: string) {
  return myRequest.request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
export function getSongUrl(id: number) {
  return myRequest.request({
    url: '/song/url/v1',
    params: {
      id
    }
  })
}
export function getSongLyric(id: number) {
  return myRequest.request({
    url: '/lyric',
    params: {
      id
    }
  })
}
