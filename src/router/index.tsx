import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Music = lazy(() => import('@/views/music'))
const Search = lazy(() => import('@/views/search'))
const Rank = lazy(() => import('@/views/rank'))
const Video = lazy(() => import('@/views/video'))
const PlaylistSort = lazy(() => import('@/views/playlist-sort'))
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
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/rank',
    element: <Rank />
  },
  {
    path: '/video',
    element: <Video />
  },
  {
    path: '/playlistSort',
    element: <PlaylistSort />
  }
]

export default routes
