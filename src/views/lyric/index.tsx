import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { LyricWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchCommentDataAction } from '@/store/modules/comment'
import Comment from '@/component/comment'

interface IProps {
  children?: ReactNode
}

const Lyric: FC<IProps> = () => {
  const divRef = useRef<HTMLDivElement[]>([])
  const lyricRef = useRef<HTMLDivElement | null>(null)

  //获取全部的ref
  const getRef = (dom: HTMLDivElement) => {
    divRef.current.push(dom)
  }

  // 从redux中获取数据
  const { playlist, playlistIndex, lyricIndex, lyricTotal, comments } = useAppSelector(
    (state) => ({
      playlist: state.footer.playlist,
      playlistIndex: state.footer.playlistIndex,
      lyricIndex: state.footer.lyricIndex,
      lyricTotal: state.footer.lyricTotal,
      comments: state.comment.comments
    }),
    shallowEqualApp
  )

  useEffect(() => {
    //动态添加/移除样式
    if (lyricTotal > 0) {
      for (let i = 0; i < lyricTotal; i++) {
        divRef.current[i].classList.remove('active')
      }
    }
    divRef.current[lyricIndex].classList.add('active')
    //歌词滚动
    lyricRef.current?.scrollTo({
      //保持歌词在中间滚动
      top: divRef.current[lyricIndex].offsetTop > 250 ? lyricIndex * 40 - 250 : 0,
      behavior: 'smooth'
    })
  }, [lyricIndex])
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCommentDataAction({ type: 0, id: String(playlist[playlistIndex].id) }))
  }, [dispatch, playlist, lyricIndex])
  return (
    <LyricWrapper>
      <div className="container">
        <div className="left">
          <img src={playlist[playlistIndex]?.al?.picUrl} alt="" />
        </div>
        <div className="right">
          {playlist && (
            <div className="top">
              <div className="song-name">{playlist[playlistIndex]?.name}</div>
              <div className="name">
                <div className="al-name">专辑: {playlist[playlistIndex]?.al?.name}</div>
                <div className="ar-name">
                  <div className="name-item">
                    <span>歌手: </span>
                    {playlist[playlistIndex]?.ar?.map((tag: any, index: number) => {
                      return (
                        <span key={tag.id}>
                          {tag.name}
                          {index < playlist[playlistIndex]?.ar?.length - 1 ? ' / ' : ''}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="lyrics" ref={lyricRef}>
            {playlist &&
              playlist[playlistIndex]?.lyrics?.map((item, index) => {
                return (
                  <div className="lyrics-item" key={index} ref={getRef}>
                    {item.text}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <Comment comments={comments} />
    </LyricWrapper>
  )
}

export default memo(Lyric)
