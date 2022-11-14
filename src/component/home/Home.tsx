import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { HomeWrapper } from './style'
import Aside from '../aside'
import Header from '../header'
interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="aside">
          <Aside />
        </div>
        <div className="right-area">
          <div className="content">{useRoutes(routes)}</div>
          <div className="footer">footer</div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
