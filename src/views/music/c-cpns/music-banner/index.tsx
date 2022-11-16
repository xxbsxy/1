import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
interface IProps {
  children?: ReactNode
}

const MusicBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  //获取轮播图数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.music.banners
    }),
    shallowEqualApp
  )

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }
  let bgcUrl = banners[currentIndex]?.imageUrl

  if (bgcUrl) {
    bgcUrl = bgcUrl + '?imageView&blur=40x20'
  }
  console.log(bgcUrl)
  return (
    <BannerWrapper style={{ background: `url('${bgcUrl}') center center / 6000px` }}>
      <Carousel autoplay afterChange={handleAfterChange} effect="fade">
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
