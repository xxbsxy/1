import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AsideWrapper } from './style'
import rankSvg from '@/assets/img/aside/rank.svg'
import musicSvg from '@/assets/img/aside/music.svg'
import videoSvg from '@/assets/img/aside/video.svg'
import songListSvg from '@/assets/img/aside/songList.svg'

interface IProps {
  children?: ReactNode
}

const list = [
  {
    name: '乐库',
    url: '/music',
    imgUrl: musicSvg
  },
  {
    name: '视频',
    url: '/video',
    imgUrl: videoSvg
  },

  {
    name: '歌单',
    url: '/playlistSort',
    imgUrl: songListSvg
  },
  {
    name: '排行榜',
    url: '/rank',
    imgUrl: rankSvg
  }
]

const Aside: FC<IProps> = () => {
  return (
    <AsideWrapper>
      <div>
        {list.map((item) => {
          return (
            <div key={item.url} className="item">
              <img src={item.imgUrl} alt="" className="pic" />
              <span className="name">{item.name}</span>
            </div>
          )
        })}
      </div>
    </AsideWrapper>
  )
}

export default memo(Aside)
