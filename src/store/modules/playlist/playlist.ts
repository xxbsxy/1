import { getPlaylistDetail } from '@/service/playlist'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IPlaylistObject } from './type'
export const featchPlaylistDataAction = createAsyncThunk(
  'playlist',
  async (id: string, { dispatch }) => {
    const res = (await getPlaylistDetail(id)) as any
    dispatch(changePlaylistAction(res.playlist))
  }
)

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: {} as IPlaylistObject
  },
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlist = payload
    }
  }
})
export const { changePlaylistAction } = playlistSlice.actions

export default playlistSlice.reducer
