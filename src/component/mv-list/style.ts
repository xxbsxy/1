import styled from 'styled-components'
import palySvg from '@/assets/img/music/play.svg'
import palyActiveSvg from '@/assets/img/music/play-active.svg'
export const MvlistWrapper = styled.div`
  .mv-list {
    position: relative;
    margin-top: -4px;
    margin-left: -4px;
    width: 390px;
    height: 219px;
    cursor: pointer;
    .img {
      width: 390px;
      height: 224px;
      border-radius: 10px;
      border: 5px solid rgb(247, 247, 247);
      transition: all 0.3s ease;
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
    .play-count {
      display: flex;
      align-items: center;
      position: absolute;
      top: 15px;
      right: 10px;
      padding: 0px 12px;
      height: 28px;
      line-height: 25px;
      font-size: 14px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      .count {
        position: relative;
        left: 4px;
      }
    }
    &:hover .img {
      transform: scale(1.02);
      border: 5px solid transparent;
    }
    &:hover .play-icon {
      opacity: 1;
    }
  }
  p {
    margin: 8px 0;
    width: 390px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
