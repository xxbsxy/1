import {
  getBanners,
  getRecommendSongs,
  getRecommendPlaylist,
  getRecommendMv
} from '@/service/music'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type {
  IBanner,
  IBannerObject,
  IPlaylist,
  IPlaylistObject,
  IMvData,
  IMvDataObject
} from './type'

//获取轮播图数据
export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = (await getBanners()) as IBannerObject
  dispatch(changeBannersAction(res.banners))
})
//获取推荐音乐数据
export const fetchRecommendSongsDataAction = createAsyncThunk(
  'songs',
  async (arg, { dispatch }) => {
    const res = (await getRecommendSongs()) as { result: any }
    dispatch(changeRecommendSongsAction(res.result))
  }
)
//获取推荐歌单数据
export const fetchRecommendPlaylistDataAction = createAsyncThunk(
  'playlist',
  async (arg, { dispatch }) => {
    const res = (await getRecommendPlaylist()) as IPlaylistObject
    dispatch(changeRecommendPlaylistAction(res.result))
  }
)

//获取推荐mv数据
export const fetchRecommendMvDataAction = createAsyncThunk(
  'playlist',
  async (arg, { dispatch }) => {
    const res = (await getRecommendMv()) as IMvDataObject
    dispatch(changRrecommendMvAction(res.data))
  }
)

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    banners: [] as IBanner[], //轮播图数据
    recommendSongs: [] as any[], //推荐音乐数据
    recommendPlaylist: [] as IPlaylist[], //推荐歌单数据
    recommendMv: [] as IMvData[] //推荐Mv数据
  },
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeRecommendSongsAction(state, { payload }) {
      state.recommendSongs = payload
    },
    changeRecommendPlaylistAction(state, { payload }) {
      state.recommendPlaylist = payload
    },
    changRrecommendMvAction(state, { payload }) {
      state.recommendMv = payload
    }
  }
})

export const {
  changeBannersAction,
  changeRecommendSongsAction,
  changeRecommendPlaylistAction,
  changRrecommendMvAction
} = musicSlice.actions

export default musicSlice.reducer
