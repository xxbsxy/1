import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchVideoDetailDataAction } from '@/store/modules/video/video'
import { VideoWrapper } from './style'
import { formatPlayCount } from '@/utils/formatPlayCount'
import Comment from '@/component/comment'

interface IProps {
  children?: ReactNode
}

const VideoDetail: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (id) {
      dispatch(fetchVideoDetailDataAction(Number(id)))
    }
  }, [dispatch, id])
  const { videoUrl, videoDetail, videoSimilar, comments } = useAppSelector((state) => ({
    videoUrl: state.video.videoUrl,
    videoDetail: state.video.videoDetail,
    videoSimilar: state.video.videoSimilar,
    comments: state.comment.comments
  }))
  const toVideoDetail = (id: number) => {
    navigate(`/videoDetail?id=${id}`)
  }
  return (
    <VideoWrapper>
      <div className="left-area">
        <h3 className="video-title">视频详情</h3>
        <video src={videoUrl ? videoUrl : ''} className="video" controls></video>
        <div className="name">
          {videoDetail?.name} - {videoDetail?.artistName}
        </div>
        <div className="time">
          <span className="publishTime">发布时间: {videoDetail?.publishTime}</span> 播放次数:{' '}
          {formatPlayCount(videoDetail?.playCount)}
        </div>
        <div className="comment">
          <Comment comments={comments} />
        </div>
      </div>
      <div className="right-area">
        <h3 className="video-title">相关视频</h3>
        {videoSimilar?.map((item: any) => {
          return (
            <div key={item.id} className="similar-item">
              <img
                src={item.cover}
                alt=""
                className="pic"
                onClick={(e) => toVideoDetail(item.id)}
              />
              <div className="name">
                <div className="video-name">{item.name}</div>
                <div className="ar-name">{item.artistName}</div>
              </div>
            </div>
          )
        })}
      </div>
    </VideoWrapper>
  )
}

export default memo(VideoDetail)
