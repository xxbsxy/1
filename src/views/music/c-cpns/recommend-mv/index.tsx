import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { MvWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchRecommendMvDataAction } from '@/store/modules/music/music'
import Mvlist from '@/component/mvlist'
interface IProps {
  children?: ReactNode
}

const RecommendMv: FC<IProps> = () => {
  //派发请求获取推荐Mv数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendMvDataAction())
  }, [])
  const { recommendMv } = useAppSelector(
    (state) => ({
      recommendMv: state.music.recommendMv
    }),
    shallowEqualApp
  )
  return (
    <MvWrapper>
      <Mvlist mvlist={recommendMv} />
    </MvWrapper>
  )
}

export default memo(RecommendMv)
