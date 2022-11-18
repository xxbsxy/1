import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getRank } from '@/service/rank'
import PlaylistList from '@/component/playlist-list'
import { RankWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Rank: FC<IProps> = () => {
  const [list, setList] = useState()
  useEffect(() => {
    getRank().then((res: any) => {
      setList(res.list)
    })
  }, [])
  return <RankWrapper>{list && <PlaylistList playlist={list} />}</RankWrapper>
}

export default memo(Rank)
