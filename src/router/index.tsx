import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Music = lazy(() => import('@/views/music'))
const Search = lazy(() => import('@/views/search'))
const Rank = lazy(() => import('@/views/rank'))
const VideoSort = lazy(() => import('@/views/video-sort'))
const PlaylistSort = lazy(() => import('@/views/playlist-sort'))
const PlaylistDetail = lazy(() => import('@/views/playlist-detail'))
const VideoDetail = lazy(() => import('@/views/video-detail'))

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
    element: <VideoSort />
  },
  {
    path: '/videoDetail',
    element: <VideoDetail />
  },
  {
    path: '/playlistSort',
    element: <PlaylistSort />
  }
]

export default routes
