import styled from 'styled-components'

export const VideoWrapper = styled.div`
  display: flex;

  .left-area {
    .video {
      margin-top: 20px;
      width: 900px;
    }
    .name {
      font-size: 16px;
      margin-top: 10px;
    }
    .time {
      margin-top: 20px;
      .publishTime {
        margin-right: 50px;
      }
    }
    .comment {
      margin-top: 20px;
      padding-right: 15px;
    }
  }
  .right-area {
    margin-left: 40px;
    .similar-item {
      display: flex;
      margin-top: 20px;
      .pic {
        width: 180px;
        height: 100px;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
          transform: scale(1.02);
        }
      }
      .name {
        margin-left: 10px;
        .video-name {
          margin-top: 10px;
          font-size: 16px;
        }
        .ar-name {
          margin-top: 30px;
        }
        .video-name,
        .ar-name {
          width: 120px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .video-title {
    font-weight: 700;
    margin-top: 20px;
    font-size: 20px;
  }
`
