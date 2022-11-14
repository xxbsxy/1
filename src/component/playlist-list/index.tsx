import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistWrapper } from './style'
import { IPlaylist } from '@/store/modules/music/type'
import { Col, Row } from 'antd'
import musicSvg from '@/assets/img/music/music.svg'
import { formatPlayCount } from '@/utils/formatPlayCount'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  playlist: IPlaylist[]
}

const Playlist: FC<IProps> = (props) => {
  //点击去歌单详情
  const navigate = useNavigate()
  const toPlaylistDetail = (id: number) => {
    navigate(`/playlist?id=${id}`)
  }
  return (
    <PlaylistWrapper>
      <Row>
        {props.playlist.map((item) => {
          return (
            <Col span={5} key={item.id} onClick={(e) => toPlaylistDetail(item.id)}>
              <div className="playlist-item">
                {/* 遮罩层 */}
                <div className="mask"></div>
                {/* 歌单图片 */}
                <img src={item.picUrl || item.coverImgUrl} className="pic" alt="" />
                {/* 播放数 */}
                <div className="playCount">
                  <img src={musicSvg} className="music-img" />
                  {formatPlayCount(item.playCount)}
                </div>
                {/* 播放的图片 */}
                <div className="play-icon"></div>
              </div>
              {/* 歌单名称 */}
              <p className="name">{item.name}</p>
            </Col>
          )
        })}
      </Row>
    </PlaylistWrapper>
  )
}

export default memo(Playlist)
