//转化时间戳
export function formatTimeStamp(TimeStamp: number) {
  let date = new Date(TimeStamp)
  let y = date.getFullYear()
  let MM: number | string = date.getMonth() + 1
  MM = MM < 10 ? '0' + MM : MM
  let d: number | string = date.getDate()
  d = d < 10 ? '0' + d : d
  return y + '-' + MM + '-' + d
}
