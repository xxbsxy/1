import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'
import { formatMillisecond } from '@/utils/formatMillisecond'

interface IProps {
  children?: ReactNode
  songs: any[]
}

const Songlist: FC<IProps> = (props) => {
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
              <tr key={item.id} className="item">
                <td className="td1">
                  <img src={item?.al?.picUrl} alt="" />
                  {item?.name}
                </td>
                <td className="td2">{item?.ar[0]?.name}</td>
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
