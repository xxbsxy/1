import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchTopPlaylistDataAction } from '@/store/modules/playlist-sort'
import PlaylistList from '@/component/playlist-list'
import { SortWrapper } from './style'
import { Pagination } from 'antd'
interface IProps {
  children?: ReactNode
}

const PlaylistSort: FC<IProps> = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const aRef = useRef<HTMLDivElement | null>(null)
  //派发事件获取歌单列表
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTopPlaylistDataAction({}))
  }, [dispatch])
  const { playlist, total } = useAppSelector((state) => ({
    playlist: state.playlistSort.playlist,
    total: state.playlistSort.total
  }),shallowEqualApp)
  const handlePageChange = (page: number) => {
    dispatch(fetchTopPlaylistDataAction({ offset: (page - 1) * 50 }))
    setCurrentPage(page)
  }
  return (
    <SortWrapper ref={aRef}>
      <PlaylistList playlist={playlist as any} />
      <Pagination
        current={currentPage}
        total={total}
        defaultPageSize={50}
        showSizeChanger={false}
        onChange={handlePageChange}
      />
    </SortWrapper>
  )
}

export default memo(PlaylistSort)
