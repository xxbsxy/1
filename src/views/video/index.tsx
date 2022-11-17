import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Video: FC<IProps> = () => {
  return <div>视频</div>
}

export default memo(Video)
