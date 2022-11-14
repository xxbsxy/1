import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'

import 'normalize.css'
import '@/assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Suspense fallback="">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
)
