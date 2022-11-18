import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchVideoDataAction } from '@/store/modules/video/video'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import MvList from '@/component/mv-list'
import { VideoWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const VideoSort: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchVideoDataAction({}))
  }, [dispatch])
  const { videoList } = useAppSelector(
    (state) => ({
      videoList: state.video.videoList
    }),
    shallowEqualApp
  )
  return (
    <VideoWrapper>
      <MvList mvs={videoList} />
    </VideoWrapper>
  )
}

export default memo(VideoSort)
