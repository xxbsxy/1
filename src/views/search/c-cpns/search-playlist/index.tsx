import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { featchSearchPlaylistDataAction } from '@/store/modules/search/search'
import PlaylistList from '@/component/playlist-list'
interface IProps {
  children?: ReactNode
}

const SearchPlaylist: FC<IProps> = () => {
  //派发action获取搜素的歌单数据
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') as string
  useEffect(() => {
    dispatch(featchSearchPlaylistDataAction(keyword))
  }, [dispatch, keyword])
  const { searcPlaylist } = useAppSelector(
    (state) => ({
      searcPlaylist: state.search.searcPlaylist
    }),
    shallowEqualApp
  )
  return (
    <PlaylistWrapper>
      <PlaylistList playlist={searcPlaylist} />
    </PlaylistWrapper>
  )
}

export default memo(SearchPlaylist)
