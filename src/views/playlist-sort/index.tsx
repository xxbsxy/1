import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchTopPlaylistDataAction } from '@/store/modules/playlist-sort'
import PlaylistList from '@/component/playlist-list'
import { SortWrapper } from './style'
import Pagination from '@/component/pagination'
interface IProps {
  children?: ReactNode
}

const PlaylistSort: FC<IProps> = () => {
  //派发事件获取歌单列表
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTopPlaylistDataAction({}))
  }, [dispatch])
  const { playlist, total } = useAppSelector(
    (state) => ({
      playlist: state.playlistSort.playlist,
      total: state.playlistSort.total
    }),
    shallowEqualApp
  )
  const handlePageSizeChange = (page: number) => {
    dispatch(fetchTopPlaylistDataAction({ offset: (page - 1) * 50 }))
  }
  return (
    <SortWrapper>
      <PlaylistList playlist={playlist as any} />
      <div className="page">
        <Pagination total={total} pageSizeChange={(page: number) => handlePageSizeChange(page)} />
      </div>
    </SortWrapper>
  )
}

export default memo(PlaylistSort)
