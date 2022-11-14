import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistWrapper } from './styled'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchRecommendPlaylistDataAction } from '@/store/modules/music/music'
import Playlist from '@/component/playlist-list'
interface IProps {
  children?: ReactNode
}

const RecommendPlaylist: FC<IProps> = () => {
  //派发请求获取推荐歌单数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendPlaylistDataAction())
  }, [])
  const { recommendPlaylist } = useAppSelector(
    (state) => ({
      recommendPlaylist: state.music.recommendPlaylist
    }),
    shallowEqualApp
  )
  return (
    <PlaylistWrapper>
      <Playlist playlist={recommendPlaylist} />
    </PlaylistWrapper>
  )
}

export default memo(RecommendPlaylist)
