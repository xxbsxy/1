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
