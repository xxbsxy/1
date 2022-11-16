import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { featchPlaylistDataAction } from '@/store/modules/playlist/playlist'
import PlaylistTop from './playlist-top'
import Tabs from './tabs'

interface IProps {
  children?: ReactNode
}

const PlaylistDetail: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as string

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(featchPlaylistDataAction(id))
  }, [dispatch, id])

  return (
    <div>
      <PlaylistTop />
      <Tabs />
    </div>
  )
}

export default memo(PlaylistDetail)
