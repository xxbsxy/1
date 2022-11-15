import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import musicSlice from './modules/music/music'
import searchSlice from './modules/search/search'
import playlistSlice from './modules/playlist/playlist'

const store = configureStore({
  reducer: {
    music: musicSlice,
    search: searchSlice,
    playlist: playlistSlice
  }
})
//二次封装 使state能自动推导类型
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DiapatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DiapatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
