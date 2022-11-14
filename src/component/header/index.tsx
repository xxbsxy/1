import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const [keyword, setKeyword] = useState('')
  // 获取键盘输入
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }
  // 点击回车前往搜素页面
  const toSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
    }
  }
  return (
    <HeaderWrapper>
      {/* logo */}
      <img src={require('@/assets/img/header/vae.jpg')} alt="" className="logo" />
      {/* 前进后退图标 */}
      <div className="icons">
        <span className="left-icon">
          <LeftOutlined style={{ fontSize: '16px' }} />
        </span>
        <span className="right-icon">
          <RightOutlined style={{ fontSize: '16px' }} />
        </span>
      </div>
      {/* 搜素 */}
      <div>
        <input
          type="text"
          placeholder="搜索音乐"
          className="search"
          onChange={handleChange}
          onKeyDown={toSearch}
        />
      </div>
    </HeaderWrapper>
  )
}

export default memo(Header)
