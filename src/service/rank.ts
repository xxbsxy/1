import myRequest from './api'
// 获得排行榜信息
export function getRank() {
  return myRequest.request({
    url: '/toplist'
  })
}
