import { getSongDetail, getSongLyric, getSongUrl } from '@/service/playlist'
import { ILyric, parseLyric } from '@/utils/paeseLyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ICurrentSong, ISongObject } from './type'
export const fetchCurrentSongDataAction = createAsyncThunk(
  'footer',
  async (id: number, { dispatch, getState }) => {
    let flag = true
    let flagIndex = -1
    const state = getState() as any
    for (let i = 0; i < state.footer.playlist.length; i++) {
      if (state.footer.playlist[i].id === id) {
        flag = false
        flagIndex = i
        break
      }
    }

    //点击的不是同一首歌
    if (flag) {
      //获取当前播放音乐详情
      const res = (await getSongDetail(id + '')) as ISongObject
      await dispatch(changePlyalistAction(res.songs[0]))
      //获取音乐url
      const res1 = await getSongUrl(res.songs[0].id)
      await dispatch(changeCurrentSongUrlAction(res1))
      //获取音乐歌词
      const res2 = await getSongLyric(id)
      dispatch(changeCurrentSongLyricAction(res2))
    } else {
      // 点击的是同一首歌
      console.log(flagIndex)
      dispatch(changePlyalisIndextAction(flagIndex))
    }
  }
)

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    playlist: [] as ICurrentSong[], //播放列表
    playlistIndex: -1, //当前播放歌曲索引
    lyricIndex: -1, //当前歌词索引,
    lyricTotal: 0
  },
  reducers: {
    changeCurrentSongUrlAction(state, { payload }) {
      state.playlist[state.playlistIndex].url = payload.data[0].url
    },
    changeCurrentSongLyricAction(state, { payload }) {
      const lyrics = parseLyric(payload.lrc.lyric)
      state.lyricTotal = lyrics.length
      state.playlist[state.playlistIndex].lyrics = lyrics
    },
    changePlyalistAction(state, { payload }) {
      state.playlist.push(payload)
      state.playlistIndex = state.playlist.length - 1
      localStorage.setItem('playlist', JSON.stringify(state.playlist))
      localStorage.setItem('playlistIndex', JSON.stringify(state.playlistIndex))
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlyalisIndextAction(state, { payload }) {
      if (payload === 'back') {
        state.playlistIndex =
          state.playlistIndex < 1 ? state.playlist.length - 1 : state.playlistIndex - 1
      } else if (payload === 'next') {
        state.playlistIndex =
          state.playlistIndex > state.playlist.length - 2 ? 0 : state.playlistIndex + 1
      } else {
        state.playlistIndex = payload
      }
    }
  }
})
export const {
  changeCurrentSongUrlAction,
  changeCurrentSongLyricAction,
  changePlyalistAction,
  changePlyalisIndextAction,
  changeLyricIndexAction
} = footerSlice.actions

export default footerSlice.reducer
