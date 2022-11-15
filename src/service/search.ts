import myRequest from './api'
interface searchData {
  keywords: string
  type: number
  limit?: number
  offset?: number
}
//获得搜素详情
export function getSearchData(data: searchData) {
  return myRequest.request({
    url: '/cloudsearch',
    params: data
  })
}
