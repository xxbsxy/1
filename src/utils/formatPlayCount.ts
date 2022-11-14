//转化播放次数
export function formatPlayCount(playCount: number) {
  if (playCount < 100000) {
    return playCount
  } else if (playCount < 100000000 && playCount > 100000) {
    return (playCount / 10000).toFixed(1) + '万'
  } else {
    return (playCount / 100000000).toFixed(2) + '亿'
  }
}
