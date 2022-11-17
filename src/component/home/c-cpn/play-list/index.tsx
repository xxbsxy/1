import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchCurrentSongDataAction } from '@/store/modules/footer/footer'
import { formatMillisecond } from '@/utils/formatMillisecond'

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { playlist } = useAppSelector(
    (state) => ({
      playlist: state.footer.playlist
    }),
    shallowEqualApp
  )
  const playMusic = (id: number) => {
    dispatch(fetchCurrentSongDataAction(id))
  }
  return (
    <PlayWrapper>
      <h2 className="title">播放队列</h2>
      <h3>共{playlist.length}首歌曲</h3>
      <table>
        <tbody>
          {playlist.map((item) => {
            return (
              <tr key={item.id} className="item" onDoubleClick={(e) => playMusic(item.id)}>
                <td className="td1">
                  <div className="song-name"> {item?.name}</div>
                </td>
                <td className="td2">
                  {item?.ar?.map((tag: any, index: number) => {
                    return (
                      <span key={tag.id}>
                        {tag.name}
                        {index < item?.ar?.length - 1 ? ' / ' : ''}
                      </span>
                    )
                  })}
                </td>
                <td className="td4">{formatMillisecond(item?.dt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </PlayWrapper>
  )
}

export default memo(PlayList)
