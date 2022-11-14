import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TabsWrapper } from './style'
import { Tabs } from 'antd'
import RecommendSong from '../recommend-song'
import RecommendMv from '../recommend-mv'
import RecommendPlaylist from '../recommend-playlist'

interface IProps {
  children?: ReactNode
}

const index: FC<IProps> = () => {
  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `推荐歌单`,
            key: '1',
            children: <RecommendPlaylist />
          },
          {
            label: `推荐音乐`,
            key: '2',
            children: <RecommendSong />
          },
          {
            label: `推荐MV`,
            key: '3',
            children: <RecommendMv />
          }
        ]}
      />
    </TabsWrapper>
  )
}

export default memo(index)
