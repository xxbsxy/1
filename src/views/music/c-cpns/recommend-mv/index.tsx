import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { MvWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchRecommendMvDataAction } from '@/store/modules/music/music'
import Mvlist from '@/component/mv-list'
interface IProps {
  children?: ReactNode
}

const RecommendMv: FC<IProps> = () => {
  //派发请求获取推荐Mv数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendMvDataAction())
  }, [dispatch])
  const { recommendMv } = useAppSelector(
    (state) => ({
      recommendMv: state.music.recommendMv
    }),
    shallowEqualApp
  )
  return (
    <MvWrapper>
      <Mvlist mvs={recommendMv} />
    </MvWrapper>
  )
}

export default memo(RecommendMv)
