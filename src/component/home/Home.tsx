import React, { memo, Suspense, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { HomeWrapper } from './style'
import Aside from './c-cpn/aside'
import Header from './c-cpn/header'
import Footer from './c-cpn/footer'
import PlayList from './c-cpn/play-list'
interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const [isShow, setIsShow] = useState(false)
  const changeShowState = () => {
    setIsShow(!isShow)
  }
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
          <div className="content">
            <Suspense fallback="">{useRoutes(routes)}</Suspense>

            {isShow && (
              <div className="list">
                <PlayList />
              </div>
            )}
          </div>
          <div className="footer">
            <Footer changeShow={changeShowState} />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
