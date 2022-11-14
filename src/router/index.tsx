import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Music = lazy(() => import('@/views/music'))
const PlaylistDetail = lazy(() => import('@/views/playlist-detail'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/music" />
  },
  {
    path: '/music',
    element: <Music />
  },
  {
    path: '/playlist',
    element: <PlaylistDetail />
  }
]

export default routes
