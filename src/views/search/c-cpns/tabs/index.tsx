import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TabsWrapper } from './style'
import { Tabs } from 'antd'
import SearchSong from '../search-song'
import SearchPlaylist from '../search-playlist'
import SearchMv from '../search-mv'
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
            label: `热门歌曲`,
            key: '1',
            children: <SearchSong />
          },
          {
            label: `歌单`,
            key: '2',
            children: <SearchPlaylist />
          },
          {
            label: `MV`,
            key: '3',
            children: <SearchMv />
          }
        ]}
      />
    </TabsWrapper>
  )
}

export default memo(index)
