import styled from 'styled-components'
import palySvg from '@/assets/img/music/play.svg'
import palyActiveSvg from '@/assets/img/music/play-active.svg'
export const PlaylistWrapper = styled.div`
  .ant-col-5 {
    max-width: 20%;
  }
  .playlist-item {
    position: relative;
    margin-top: 1px;
    margin-left: -5px;
    width: 220px;
    height: 210px;
    cursor: pointer;
    transition: all 0.3s ease;
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .pic {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .playCount {
      position: absolute;
      bottom: 10px;
      right: 15px;
      padding: 0 11px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      border-radius: 15px;
      transition: all 0.3s ease;
      .music-img {
        position: relative;
        top: 4px;
        margin-right: 5px;
      }
    }
    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 56px;
      height: 56px;
      background: url(${palySvg}) no-repeat center;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;
      opacity: 0;
      &:hover {
        background: url(${palyActiveSvg}) no-repeat center;
      }
    }

    &:hover .playCount {
      opacity: 0;
    }
    &:hover .mask {
      opacity: 1;
    }
    &:hover .play-icon {
      opacity: 1;
    }
    &:hover {
      transform: translateY(-14px);
    }
  }
  .name {
    margin: 10px 0px 20px 4px;
    width: 220px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      color: skyblue;
    }
  }
`
