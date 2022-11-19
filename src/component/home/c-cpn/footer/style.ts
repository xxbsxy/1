import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    margin-top: 6px;
    width: 300px;
    overflow: hidden;
    .img {
      position: relative;
      margin-left: 20px;
      width: 54px;
      height: 54px;
      cursor: pointer;
      &:hover .mask {
        display: block;
      }
      .pic {
        width: 54px;
        height: 54px;
        border-radius: 6px;
      }
      .mask {
        position: absolute;
        display: none;
        color: #fff;
        text-align: center;
        line-height: 50px;
        font-size: 30px;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        text-align: center;
        border-radius: 6px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    .right {
      margin-top: 4px;
      margin-left: 14px;
      font-size: 16px;
      .song-name,
      .singer-name {
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 6px;
      }
    }
  }
  .center {
    width: 600px;
    .svgs {
      position: relative;
      top: 3px;
      margin-left: 200px;
      img {
        cursor: pointer;
        margin-right: 5px;
      }
      .lyric {
        position: absolute;
        width: 400px;
        margin-top: 4px;
        margin-left: 100px;
        font-size: 16px;
        color: #6ca5fe;
      }
    }
  }
  .slider {
    position: relative;
    font-size: 14px;
    .create-time {
      position: absolute;
      top: -6px;
      left: -54px;
    }
    .end-time {
      position: absolute;
      top: -6px;
      right: -48px;
    }
  }
  .playlist-icon {
    position: absolute;
    right: 50px;
    cursor: pointer;
  }
`
