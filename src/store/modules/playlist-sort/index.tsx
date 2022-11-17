import { getTopPlaylist } from '@/service/playlistSort'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IPlaylist, IPlaylistResult, IData } from './type'
export const fetchTopPlaylistDataAction = createAsyncThunk(
  'playlistSort',
  async (data: IData, { dispatch }) => {
    const res = (await getTopPlaylist(data)) as IPlaylistResult
    dispatch(changePlaylistAction(res))
  }
)
const playlistSortSlice = createSlice({
  name: 'playlistSort',
  initialState: {
    playlist: [] as IPlaylist[],
    total: 0
  },
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlist = payload.playlists
      state.total = payload.total
    }
  }
})
export const { changePlaylistAction } = playlistSortSlice.actions
export default playlistSortSlice.reducer
