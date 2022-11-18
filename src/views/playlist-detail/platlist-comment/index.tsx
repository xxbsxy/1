import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchCommentDataAction } from '@/store/modules/comment'
import { useSearchParams } from 'react-router-dom'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { CommentWrapper } from './style'
import Comment from '@/component/comment'

interface IProps {
  children?: ReactNode
}

const PlaylistComment: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as string

  useEffect(() => {
    dispatch(fetchCommentDataAction({ id, type: 2 }))
  }, [dispatch])
  const { comments } = useAppSelector(
    (state) => ({
      comments: state.comment.comments
    }),
    shallowEqualApp
  )
  return (
    <CommentWrapper>
      <Comment comments={comments} />
    </CommentWrapper>
  )
}

export default memo(PlaylistComment)
