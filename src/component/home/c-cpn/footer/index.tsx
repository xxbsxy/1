import React, { memo, useRef, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import backSvg from '@/assets/img/footer/back.svg'
import nextSvg from '@/assets/img/footer/next.svg'
import playSvg from '@/assets/img/footer/play.svg'
import pauseSvg from '@/assets/img/footer/pause.svg'
import playlistSvg from '@/assets/img/footer/playlist.svg'
import { Badge } from 'antd'
import { Slider } from 'antd'
import { formatMillisecond } from '@/utils/formatMillisecond'
import { changeLyricIndexAction, changePlyalisIndextAction } from '@/store/modules/footer/footer'
interface IProps {
  children?: ReactNode
  changeShow: () => void
}

const Footer: FC<IProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false) //播放暂停按钮
  const [duration, setDuration] = useState(0) //音乐总时长
  const [progressValue, setProgresssValue] = useState(0) //进度条
  const [createTime, setCreateTime] = useState('00 : 00') //开始时间
  const [endTime, setEndTime] = useState('00 : 00') //结束时间
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const lyricRef = useRef<HTMLElement | null>(null)
  const dispatch = useAppDispatch()
  // 从redux中获取数据
  const { playlist, playlistIndex, lyricIndex } = useAppSelector(
    (state) => ({
      playlist: state.footer.playlist,
      playlistIndex: state.footer.playlistIndex,
      lyricIndex: state.footer.lyricIndex
    }),
    shallowEqualApp
  )
  const currentSong = playlist[playlistIndex]
  const currentSongUrl = playlist[playlistIndex]?.url
  const songLyrics = playlist[playlistIndex]?.lyrics
  //副作用
  useEffect(() => {
    if (currentSongUrl)
      //设置src并播放音乐
      audioRef.current!.src = currentSongUrl
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
    //获取音乐总时长
    setDuration(currentSong?.dt)
    setEndTime(formatMillisecond(currentSong?.dt))
  }, [currentSongUrl, currentSong])

  /*事件处理函数 */
  //控制播放与暂停
  const handlePlayClick = () => {
    if (!currentSongUrl) return
    if (!audioRef.current?.paused) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        ?.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          setIsPlaying(false)
        })
    }
  }
  //歌曲播放回调
  const handleTimeUpdata = () => {
    //获取当前播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    //改变进度条进度
    setProgresssValue((currentTime / duration) * 100)
    //改变音乐播放时间
    setCreateTime(formatMillisecond(currentTime))
    //播放时间结束播放下一首歌
    if (currentTime >= duration) {
      //如果只有一首歌则重新播放
      if (playlist?.length === 1) {
        audioRef.current!.currentTime = 0
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            setIsPlaying(false)
          })
      }
      dispatch(changePlyalisIndextAction('next'))
    }
    //获取当前歌词
    if (songLyrics) {
      let index = songLyrics!.length - 1
      for (let i = 0; i < songLyrics!.length; i++) {
        if (songLyrics![i].time > currentTime) {
          index = i - 1
          break
        }
      }
      if (lyricIndex === index || index === -1) return
      //储存当前播放歌词的索引
      dispatch(changeLyricIndexAction(index))
      if (lyricRef.current) {
        lyricRef.current.innerText = songLyrics[index]?.text
      }
    }
  }
  //改变进度条时的回调函数
  const changeProgress = (value: number) => {
    audioRef.current!.currentTime = (duration / 1000) * (value / 100)
    setProgresssValue(value)
  }
  // 播放前一首歌曲
  const backPlay = () => {
    dispatch(changePlyalisIndextAction('back'))
  }
  // 播放下一首歌曲
  const nextPlay = () => {
    dispatch(changePlyalisIndextAction('next'))
  }
  //控制播放列表的显示与隐藏
  const changePlayListState = () => {
    props.changeShow()
  }
  return (
    <FooterWrapper>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdata}></audio>
      <div className="left">
        {currentSong?.al?.picUrl ? (
          <img src={currentSong?.al?.picUrl} alt="" className="pic" />
        ) : (
          <img src={require('@/assets/img/header/vae.jpg')} alt="" className="pic" />
        )}
        <div className="right">
          <div className="song-name">{currentSong?.name}</div>
          <div className="singer-name">
            {currentSong?.ar?.map((item, index) => {
              return (
                <span key={item.id}>
                  {item.name}
                  {index < currentSong?.ar?.length - 1 ? ' / ' : ''}
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <div className="center">
        {/* 图标 */}
        <div className="svgs">
          <img src={backSvg} alt="" onClick={backPlay} />
          {isPlaying ? (
            <img src={pauseSvg} alt="" onClick={handlePlayClick} />
          ) : (
            <img src={playSvg} alt="" onClick={handlePlayClick} />
          )}

          <img src={nextSvg} alt="" onClick={nextPlay} />
          <span ref={lyricRef} className="lyric"></span>
        </div>
        {/* 滑块 */}
        <div className="slider">
          <span className="create-time">{createTime}</span>
          <Slider value={progressValue} onChange={changeProgress} tooltip={{ open: false }} />
          <span className="end-time">{endTime}</span>
        </div>
      </div>
      {/* 播放列表 */}
      <div className="playlist-icon">
        <Badge count={playlist.length} size="small" color="blue" showZero>
          <img src={playlistSvg} alt="" onClick={changePlayListState} />
        </Badge>
      </div>
    </FooterWrapper>
  )
}

export default memo(Footer)
