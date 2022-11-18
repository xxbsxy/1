import { getVideoAll, getVideoDetail, getVideoSimilar, getVideoUrl } from '@/service/video'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCommentDataAction } from '../comment'
import type { IVideoList, IData } from './type'
export const fetchVideoDataAction = createAsyncThunk('video', async (data: IData, { dispatch }) => {
  const res = await getVideoAll({})
  await dispatch(changeVideoListAction(res))
})
export const fetchVideoDetailDataAction = createAsyncThunk(
  'video',
  async (id: number, { dispatch }) => {
    //获取视频url
    const res = await getVideoUrl(id)
    await dispatch(changeVideoUrlAction(res))
    //获取视频详情
    const res1 = await getVideoDetail(id)
    await dispatch(changeVideoDetailAction(res1))
    //获取相关视频
    const res2 = await getVideoSimilar(id)
    await dispatch(changeVideoSimilarAction(res2))
    dispatch(fetchCommentDataAction({ id: String(id), type: 1 }))
  }
)
const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoList: [] as IVideoList[], //视频列表
    videoTotal: 0, //视频总数,
    videoUrl: '',
    videoDetail: {} as any,
    videoSimilar: [] as any[],
    videoComments: [] as any[]
  },
  reducers: {
    changeVideoListAction(state, { payload }) {
      state.videoList = payload.data
      state.videoTotal = payload.count
    },
    changeVideoUrlAction(state, { payload }) {
      state.videoUrl = payload.data.url
    },
    changeVideoDetailAction(state, { payload }) {
      state.videoDetail = payload.data
    },
    changeVideoSimilarAction(state, { payload }) {
      state.videoSimilar = payload.mvs
    },
    changeVideoCommentsAction(state, { payload }) {
      state.videoComments = payload.mvs
    }
  }
})
export const {
  changeVideoListAction,
  changeVideoUrlAction,
  changeVideoDetailAction,
  changeVideoSimilarAction,
  changeVideoCommentsAction
} = videoSlice.actions
export default videoSlice.reducer
