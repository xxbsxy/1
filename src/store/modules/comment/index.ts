import { getComment } from '@/service/comment'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ICommentData } from './type'
export const fetchCommentDataAction = createAsyncThunk(
  'comment',
  async (data: ICommentData, { dispatch }) => {
    const res = (await getComment(data)) as any
    console.log(res)
    dispatch(changeCommentAction(res))
  }
)

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    commentsTotal: 0
  },
  reducers: {
    changeCommentAction(state, { payload }) {
      state.comments = payload.data.comments
      state.commentsTotal = payload.data.totalCount
    }
  }
})
export const { changeCommentAction } = commentSlice.actions

export default commentSlice.reducer
