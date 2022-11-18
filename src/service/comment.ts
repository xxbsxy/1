import myRequest from './api'

interface ICommentData {
  id: string
  type: number
  pageNo?: number
  pageSize?: number
}

export function getComment(data: ICommentData) {
  return myRequest.request({
    url: '/comment/new',
    params: data
  })
}
