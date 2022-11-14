import React, { memo } from 'react'
import Home from './component/home/Home'

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  )
}

export default memo(App)
