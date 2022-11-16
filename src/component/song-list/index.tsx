import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'
import { formatMillisecond } from '@/utils/formatMillisecond'
import { Image } from 'antd'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongDataAction } from '@/store/modules/footer/footer'
interface IProps {
  children?: ReactNode
  songs: any[]
}

const Songlist: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const playMusic = (id: number) => {
    dispatch(fetchCurrentSongDataAction(id))
  }
  return (
    <SongListWrapper>
      <table>
        <tbody>
          <tr className="top">
            <td className="td1 song-name">歌曲名</td>
            <td className="td2">歌手</td>
            <td className="td3">专辑</td>
            <td className="td4">时长</td>
          </tr>
          {props.songs.map((item) => {
            return (
              <tr key={item.id} className="item" onDoubleClick={(e) => playMusic(item.id)}>
                <td className="td1">
                  <Image
                    src={item?.al?.picUrl}
                    alt=""
                    className="pic"
                    placeholder
                    preview={false}
                  />
                  {item?.name}
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
                <td className="td3">{item?.al?.name}</td>
                <td className="td4">{formatMillisecond(item?.dt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </SongListWrapper>
  )
}

export default memo(Songlist)
