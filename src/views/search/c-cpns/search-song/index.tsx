import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import SongList from '@/component/song-list'
import Pagination from '@/component/pagination'
import { featchSearchSongDataAction } from '@/store/modules/search/search'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const SearchSong: FC<IProps> = () => {
  const { searchSongs, songTotal } = useAppSelector(
    (state) => ({
      searchSongs: state.search.searchSongs,
      songTotal: state.search.songTotal
    }),
    shallowEqualApp
  )
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') as string
  const dispatch = useAppDispatch()
  const handlePageSizeChange = (page: number) => {
    dispatch(featchSearchSongDataAction({ type: 1, offset: (page - 1) * 30, keywords: keyword }))
  }
  return (
    <SongWrapper>
      <SongList songs={searchSongs} />
      <div className="page">
        <Pagination
          total={songTotal}
          pageSize={30}
          pageSizeChange={(page) => handlePageSizeChange(page)}
        />
      </div>
    </SongWrapper>
  )
}

export default memo(SearchSong)
