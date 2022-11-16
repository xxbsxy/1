import { getPlaylistDetail, getSongDetail } from '@/service/playlist'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IPlaylistObject, IIds } from './type'
export const featchPlaylistDataAction = createAsyncThunk(
  'playlist',
  async (id: string, { dispatch }) => {
    const res = (await getPlaylistDetail(id)) as any
    await dispatch(changePlaylistAction(res.playlist))
    const trackIds = res.playlist.trackIds
    const ids = trackIds.map((item: IIds) => item.id)
    const songs = await getSongDetail(ids.join(','))
    dispatch(changePlaylistSongsAction(songs))
  }
)

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: {} as IPlaylistObject,
    playlistSongs: [] as any[]
  },
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlist = payload
    },
    changePlaylistSongsAction(state, { payload }) {
      state.playlistSongs = payload.songs
    }
  }
})
export const { changePlaylistAction, changePlaylistSongsAction } = playlistSlice.actions

export default playlistSlice.reducer
