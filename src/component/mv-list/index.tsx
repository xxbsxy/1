import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MvlistWrapper } from './style'
import { IMvData } from '@/store/modules/music/type'
import { Col, Row } from 'antd'
import { formatPlayCount } from '@/utils/formatPlayCount'
import mvPlaySvg from '@/assets/img/music/mvPlay.svg'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
  mvs: IMvData[]
}

const Mvlist: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const toVideoDetail = (id: number) => {
    navigate(`/videoDetail?id=${id}`)
  }
  return (
    <MvlistWrapper>
      <Row>
        {props.mvs.map((item) => {
          return (
            <Col span={8} key={item.id} onClick={(e) => toVideoDetail(item.id)}>
              <div className="mv-list">
                {/* mv图片 */}
                <Image src={item.cover} className="img" placeholder preview={false} />
                {/* 播放按钮 */}
                <div className="play-icon"></div>
                {/* 播放数 */}
                <div className="play-count">
                  <img src={mvPlaySvg} />
                  <span className="count">{formatPlayCount(item.playCount)}</span>
                </div>
              </div>
              {/* mv名称 */}
              <p>{item.name}</p>
            </Col>
          )
        })}
      </Row>
    </MvlistWrapper>
  )
}

export default memo(Mvlist)
