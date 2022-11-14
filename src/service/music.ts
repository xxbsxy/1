import myRequest from './api'

export function getBanners() {
  return myRequest.request({
    url: '/banner'
  })
}
//获得推荐音乐
export function getRecommendSongs() {
  return myRequest.request({
    url: '/personalized/newsong'
  })
}

//获得Mv
export function getRecommendMv() {
  return myRequest.request({
    url: '/mv/first'
  })
}

//获得推荐歌单
export function getRecommendPlaylist() {
  return myRequest.request({
    url: '/personalized'
  })
}
