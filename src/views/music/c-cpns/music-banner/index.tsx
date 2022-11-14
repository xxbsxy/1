import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
interface IProps {
  children?: ReactNode
}

const MusicBanner: FC<IProps> = () => {
  //获取轮播图数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.music.banners
    }),
    shallowEqualApp
  )
  return (
    <BannerWrapper>
      <Carousel autoplay>
        {banners.map((item) => {
          return (
            <div key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
      </Carousel>
    </BannerWrapper>
  )
}

export default memo(MusicBanner)
