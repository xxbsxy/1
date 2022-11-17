import { getVideoAll } from '@/service/video'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IVideoList, IData } from './type'
export const fetchVideoDataAction = createAsyncThunk('video', async (data: IData, { dispatch }) => {
  const res = await getVideoAll({})
  dispatch(changeVideoAction(res))
})
const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoList: [] as IVideoList[],
    videoTotal: 0
  },
  reducers: {
    changeVideoAction(state, { payload }) {
      state.videoList = payload.data
      state.videoTotal = payload.count
    }
  }
})
export const { changeVideoAction } = videoSlice.actions
export default videoSlice.reducer
