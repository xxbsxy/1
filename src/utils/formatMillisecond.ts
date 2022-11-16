// 转化毫秒
export function formatMillisecond(millisecond: number) {
  if (!millisecond) return '00 : 00'

  let minutes: number | string = parseInt((millisecond % (1000 * 60 * 60)) / (1000 * 60) + '')
  let seconds: number | string = Math.floor((millisecond % (1000 * 60)) / 1000)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return minutes + ' : ' + seconds
}
