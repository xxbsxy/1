import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TabsWrapper } from './style'
import { Tabs } from 'antd'
import PlaylistSong from '../playlist-song'
import PlaylistComment from '../platlist-comment'

interface IProps {
  children?: ReactNode
}

const index: FC<IProps> = () => {
  return (
    <TabsWrapper>
      <Tabs
        className="tabs"
        defaultActiveKey="1"
        items={[
          {
            label: `歌曲`,
            key: '1',
            children: <PlaylistSong />
          },
          {
            label: `评论`,
            key: '2',
            children: <PlaylistComment />
          }
        ]}
      />
    </TabsWrapper>
  )
}

export default memo(index)
