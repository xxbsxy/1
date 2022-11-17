import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchRecommendSongsDataAction } from '@/store/modules/music/music'
import { formatMillisecond } from '@/utils/formatMillisecond'
import { Image } from 'antd'
import { fetchCurrentSongDataAction } from '@/store/modules/footer/footer'
interface IProps {
  children?: ReactNode
}
const RecommendSong: FC<IProps> = () => {
  //派发请求获取推荐歌曲数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendSongsDataAction())
  }, [dispatch])
  const { recommendSongs } = useAppSelector(
    (state) => ({
      recommendSongs: state.music.recommendSongs
    }),
    shallowEqualApp
  )
  //双击播放音乐
  const playMusic = (id: number) => {
    dispatch(fetchCurrentSongDataAction(id))
  }
  return (
    <SongWrapper>
      <table>
        <tbody>
          <tr className="top">
            <td className="td1 song-name">歌曲名</td>
            <td className="td2">歌手</td>
            <td className="td3">专辑</td>
            <td className="td4">时长</td>
          </tr>
          {recommendSongs.map((item) => {
            return (
              <tr key={item.id} className="item" onDoubleClick={e => playMusic(item.id)}>
                <td className="td1">
                  <Image src={item?.picUrl} alt="" className="pic" placeholder preview={false} />
                  {item?.name}
                </td>
                <td className="td2">{item?.song?.artists[0]?.name}</td>
                <td className="td3">{item?.song?.album?.name}</td>
                <td className="td4">{formatMillisecond(item?.song?.duration)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </SongWrapper>
  )
}

export default memo(RecommendSong)
