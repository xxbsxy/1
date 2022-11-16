export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  const lines: string[] = lyricString.split('\n')
  const lyrics: ILyric[] = []

  for (const line of lines) {
    // 1.匹配结果
    const res = timeRegExp.exec(line)
    if (!res) continue

    // 2.获取每一组数据

    const time1 = Number(res[1]) * 60 * 1000
    const time2 = Number(res[2]) * 1000
    const time3 = res[3].length === 3 ? Number(res[3]) : Number(res[3]) * 10
    const time = time1 + time2 + time3

    const text = line.replace(timeRegExp, '')
    lyrics.push({ time, text })
  }

  return lyrics
}
