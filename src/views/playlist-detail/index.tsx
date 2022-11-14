import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const PlaylistDetail: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  return <div>index</div>
}

export default memo(PlaylistDetail)
