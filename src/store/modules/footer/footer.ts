import { getSongDetail, getSongLyric, getSongUrl } from '@/service/playlist'
import { ILyric, parseLyric } from '@/utils/paeseLyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ICurrentSong, ISongObject } from './type'
export const fetchCurrentSongDataAction = createAsyncThunk(
  'footer',
  async (id: number, { dispatch }) => {
    //获取当前播放音乐详情
    const res = (await getSongDetail(id + '')) as ISongObject
    await dispatch(changeCurrentSongAction(res.songs[0]))
    dispatch(changePlyalistAction(res.songs[0]))
    //获取音乐url
    const res1 = await getSongUrl(res.songs[0].id)
    await dispatch(changeCurrentSongUrlAction(res1))
    //获取音乐歌词
    const res2 = await getSongLyric(id)
    dispatch(changeCurrentSongLyricAction(res2))
  }
)

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    currentSong: {} as ICurrentSong,
    currentSongUrl: '',
    songLyrics: [] as ILyric[],
    playlist: [] as ICurrentSong[], //播放列表
    playlistIndex: -1
  },
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentSongUrlAction(state, { payload }) {
      state.currentSongUrl = payload.data[0].url
    },
    changeCurrentSongLyricAction(state, { payload }) {
      const lyrics = parseLyric(payload.lrc.lyric)
      state.songLyrics = lyrics
    },
    changePlyalistAction(state, { payload }) {
      state.playlist.push(payload)
    }
  }
})
export const {
  changeCurrentSongAction,
  changeCurrentSongUrlAction,
  changeCurrentSongLyricAction,
  changePlyalistAction
} = footerSlice.actions

export default footerSlice.reducer
