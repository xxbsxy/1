import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
import { formatPlayCount } from '@/utils/formatPlayCount'
interface IProps {
  children?: ReactNode
}

const PlaylistTop: FC<IProps> = () => {
  const { playlist } = useAppSelector(
    (state) => ({
      playlist: state.playlist.playlist
    }),
    shallowEqualApp
  )

  return (
    <TopWrapper>
      {playlist && (
        <div className="top">
          <div className="left-area">
            {/* 歌单图片 */}
            <img src={playlist.coverImgUrl} alt="" />
          </div>
          <div className="right-area">
            {/* 歌单名称 */}
            <h2>{playlist.name}</h2>
            {/* 歌单创建者 */}
            <div className="creator">
              <img src={playlist.creator?.avatarUrl} alt="" />
              <div className="nickname">{playlist.creator?.nickname}</div>
              <div className="time">{formatTimeStamp(playlist.createTime)} 创建</div>
            </div>
            {/* 标签 */}
            <div className="tags">
              标签: &nbsp;
              {playlist.tags?.length > 0
                ? playlist.tags?.map((item) => {
                    return (
                      <div className="tag" key={item}>
                        #{item}
                      </div>
                    )
                  })
                : '无'}
            </div>
            {/* 详情 */}
            <div className="detail">
              <div className="song">歌曲: {playlist?.trackCount}首</div>
              <div className="count">播放: {formatPlayCount(playlist?.playCount)}</div>
            </div>
            {/* 简介 */}
            <div className="des">
              <p> 简介:&nbsp;{playlist.description?.length > 0 ? playlist.description : '无'}</p>
            </div>
          </div>
        </div>
      )}
    </TopWrapper>
  )
}

export default memo(PlaylistTop)
