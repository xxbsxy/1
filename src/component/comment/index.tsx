import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CommentWrapper } from './style'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
import { LikeOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
const { TextArea } = Input
interface IProps {
  children?: ReactNode
  comments: any[]
}
const Comment: FC<IProps> = (props) => {
  const { comments } = props
  return (
    <CommentWrapper>
      <div className="comment">
        <TextArea rows={5} placeholder="期待你的评论" maxLength={6} />
        <Button shape="round" className="btn">
          发表评论
        </Button>
      </div>
      <h2 className="comment-title">精彩评论</h2>
      {comments &&
        comments.map((item: any) => {
          return (
            <div key={item.commentId} className="comment-item">
              <div className="left-area">
                <img src={item?.user?.avatarUrl} alt="" className="pic" />
              </div>
              <div className="right-area">
                <div className="nickname">{item?.user?.nickname}</div>
                <div className="time">{formatTimeStamp(item?.time)}</div>
                <div className="content">{item?.content}</div>
                <div className="icon">
                  <LikeOutlined /> <span className="like">{item?.likedCount}</span>
                </div>
              </div>
            </div>
          )
        })}
    </CommentWrapper>
  )
}

export default memo(Comment)
