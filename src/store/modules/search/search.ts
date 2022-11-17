import { getSearchData } from '@/service/search'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ISong, ISongObject, IMv, IMvObject, ISearchData } from './type'
//获取搜索音乐数据

export const featchSearchSongDataAction = createAsyncThunk(
  'songs',
  async (data: ISearchData, { dispatch }) => {
    const res = (await getSearchData(data)) as ISongObject
    dispatch(changeSearchSongAction(res.result))
  }
)

//获取搜索歌单数据
export const featchSearchPlaylistDataAction = createAsyncThunk(
  'songs',
  async (data: ISearchData, { dispatch }) => {
    const res = (await getSearchData(data)) as any
    dispatch(changeSearchPlaylistAction(res.result))
  }
)
//获取搜索Mv数据
export const featchSearchMvDataAction = createAsyncThunk(
  'songs',
  async (data: ISearchData, { dispatch }) => {
    const res = (await getSearchData(data)) as IMvObject
    dispatch(changeSearchMvAction(res.result))
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchSongs: [] as ISong[], //搜索音乐数据
    songTotal: 0, //音乐总数
    searcPlaylist: [] as any[], //搜索歌单数据
    playlistTotal: 0, //歌单总数
    searchMvs: [] as IMv[], //搜索mv数据
    mvTotal: 0 //mv总数
  },
  reducers: {
    changeSearchSongAction(state, { payload }) {
      state.searchSongs = payload.songs
      state.songTotal = payload.songCount
    },
    changeSearchPlaylistAction(state, { payload }) {
      state.searcPlaylist = payload.playlists
      state.playlistTotal = payload.playlistCount
    },
    changeSearchMvAction(state, { payload }) {
      state.searchMvs = payload.mvs
      state.mvTotal = payload.mvCount
    }
  }
})
export const { changeSearchSongAction, changeSearchPlaylistAction, changeSearchMvAction } =
  searchSlice.actions
export default searchSlice.reducer
