import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { MvWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { featchSearchMvDataAction } from '@/store/modules/search/search'
import MvList from '@/component/mv-list'
import Pagination from '@/component/pagination'

interface IProps {
  children?: ReactNode
}

const SearchMv: FC<IProps> = () => {
  //派发action获取搜素的mv数据
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const keywords = searchParams.get('keyword') as string
  useEffect(() => {
    dispatch(featchSearchMvDataAction({ type: 1004, keywords }))
  }, [dispatch, keywords])
  const { searchMvs, mvTotal } = useAppSelector(
    (state) => ({
      searchMvs: state.search.searchMvs,
      mvTotal: state.search.mvTotal
    }),
    shallowEqualApp
  )
  const handlePageSizeChange = (page: number) => {
    dispatch(featchSearchMvDataAction({ type: 1004, offset: (page - 1) * 30, keywords }))
  }
  return (
    <MvWrapper>
      <MvList mvs={searchMvs} />
      <div className="page">
        <Pagination
          total={mvTotal}
          pageSize={30}
          pageSizeChange={(page) => handlePageSizeChange(page)}
        />
      </div>
    </MvWrapper>
  )
}

export default memo(SearchMv)
