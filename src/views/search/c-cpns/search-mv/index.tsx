import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { MvWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { featchSearchMvDataAction } from '@/store/modules/search/search'
import MvList from '@/component/mv-list'

interface IProps {
  children?: ReactNode
}

const SearchMv: FC<IProps> = () => {
  //派发action获取搜素的mv数据
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') as string
  useEffect(() => {
    dispatch(featchSearchMvDataAction(keyword))
  }, [dispatch, keyword])
  const { searchMvs } = useAppSelector(
    (state) => ({
      searchMvs: state.search.searchMvs
    }),
    shallowEqualApp
  )
  console.log(111)

  return (
    <MvWrapper>
      <MvList mvs={searchMvs} />
    </MvWrapper>
  )
}

export default memo(SearchMv)
