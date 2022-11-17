import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { featchSearchPlaylistDataAction } from '@/store/modules/search/search'
import PlaylistList from '@/component/playlist-list'
import Pagination from '@/component/pagination'
interface IProps {
  children?: ReactNode
}

const SearchPlaylist: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const keywords = searchParams.get('keyword') as string
  // 副作用
  useEffect(() => {
    dispatch(featchSearchPlaylistDataAction({ keywords, type: 1000 }))
  }, [dispatch, keywords])
  //从redux获取数据
  const { searcPlaylist, playlistTotal } = useAppSelector(
    (state) => ({
      searcPlaylist: state.search.searcPlaylist,
      playlistTotal: state.search.playlistTotal
    }),
    shallowEqualApp
  )
  //页码改变
  const handlePageSizeChange = (page: number) => {
    dispatch(featchSearchPlaylistDataAction({ type: 1000, offset: (page - 1) * 30, keywords }))
  }
  return (
    <PlaylistWrapper>
      <PlaylistList playlist={searcPlaylist} />
      <div className="page">
        <Pagination
          total={playlistTotal}
          pageSize={30}
          pageSizeChange={(page) => handlePageSizeChange(page)}
        />
      </div>
    </PlaylistWrapper>
  )
}

export default memo(SearchPlaylist)
