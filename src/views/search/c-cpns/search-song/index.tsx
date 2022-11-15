import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongList from '@/component/song-list'

interface IProps {
  children?: ReactNode
}

const SearchSong: FC<IProps> = () => {
  const { searchSongs } = useAppSelector(
    (state) => ({
      searchSongs: state.search.searchSongs
    }),
    shallowEqualApp
  )
  return (
    <SongWrapper>
      <SongList songs={searchSongs} />
    </SongWrapper>
  )
}

export default memo(SearchSong)
