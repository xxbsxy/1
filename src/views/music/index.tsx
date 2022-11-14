import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/store/modules/music/music'
import MusicBanner from './c-cpns/music-banner'
import Tabs from './c-cpns/tabs'

interface IProps {
  children?: ReactNode
}

const Music: FC<IProps> = () => {
  //派发请求获取轮播图数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <MusicBanner />
      <Tabs />
    </div>
  )
}

export default memo(Music)
