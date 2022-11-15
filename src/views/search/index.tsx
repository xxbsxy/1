import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import Tabs from './c-cpns/tabs'
import { SearchWrapper } from './style'
import { useAppDispatch } from '@/store'
import { featchSearchSongDataAction } from '@/store/modules/search/search'

interface IProps {
  children?: ReactNode
}

const Search: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') as string
  console.log(keyword)
  useEffect(() => {
    dispatch(featchSearchSongDataAction(keyword))
  }, [dispatch, keyword])
  return (
    <SearchWrapper>
      <h2>{keyword}</h2>
      <Tabs />
    </SearchWrapper>
  )
}

export default memo(Search)
