import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongList from '@/component/song-list'

interface IProps {
  children?: ReactNode
}

const PlaylistSong: FC<IProps> = () => {
  const { playlistSongs } = useAppSelector(
    (state) => ({
      playlistSongs: state.playlist.playlistSongs
    }),
    shallowEqualApp
  )
  return (
    <SongWrapper>
      <SongList songs={playlistSongs} />
    </SongWrapper>
  )
}

export default memo(PlaylistSong)
