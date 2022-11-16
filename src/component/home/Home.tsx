import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { HomeWrapper } from './style'
import Aside from './c-cpn/aside'
import Header from './c-cpn/header'
import Footer from './c-cpn/footer'
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
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
