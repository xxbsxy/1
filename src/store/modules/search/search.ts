import { getSearchData } from '@/service/search'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ISong, ISongObject, IMv, IMvObject } from './type'
//获取搜索音乐数据
export const featchSearchSongDataAction = createAsyncThunk(
  'songs',
  async (keywords: string, { dispatch }) => {
    const res = (await getSearchData({ keywords, type: 1 })) as ISongObject
    dispatch(changeSearchSongAction(res.result.songs))
  }
)

//获取搜索歌单数据
export const featchSearchPlaylistDataAction = createAsyncThunk(
  'songs',
  async (keywords: string, { dispatch }) => {
    const res = (await getSearchData({ keywords, type: 1000 })) as any
    dispatch(changeSearchPlaylistAction(res.result.playlists))
  }
)
//获取搜索Mv数据
export const featchSearchMvDataAction = createAsyncThunk(
  'songs',
  async (keywords: string, { dispatch }) => {
    const res = (await getSearchData({ keywords, type: 1004 })) as IMvObject
    dispatch(changeSearchMvAction(res.result.mvs))
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchSongs: [] as ISong[], //搜索音乐数据
    searcPlaylist: [] as any[],
    searchMvs: [] as IMv[]
  },
  reducers: {
    changeSearchSongAction(state, { payload }) {
      state.searchSongs = payload
    },
    changeSearchPlaylistAction(state, { payload }) {
      state.searcPlaylist = payload
    },
    changeSearchMvAction(state, { payload }) {
      state.searchMvs = payload
    }
  }
})
export const { changeSearchSongAction, changeSearchPlaylistAction, changeSearchMvAction } =
  searchSlice.actions
export default searchSlice.reducer
