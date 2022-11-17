import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PlaylistSort: FC<IProps> = () => {
  return <div>歌单分类</div>
}

export default memo(PlaylistSort)
