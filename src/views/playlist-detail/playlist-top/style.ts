import styled from 'styled-components'

export const TopWrapper = styled.div`
  .top {
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }
  .left-area {
    img {
      width: 230px;
      height: 230px;
      border-radius: 10px;
    }
  }
  .right-area {
    margin-left: 26px;
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    .creator {
      display: flex;
      align-items: center;
      margin-top: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .nickname {
        margin-left: 12px;
        color: #448ece;
        font-size: 14px;
      }
      .time {
        margin-left: 20px;
        font-size: 12px;
        color: #818181;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .tag {
        margin-left: 12px;
        color: #520ea5;
      }
    }
    .detail {
      display: flex;
      margin-top: 15px;
      .count {
        margin-left: 20px;
      }
    }
    .des {
      margin-top: 12px;
      height: 54px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #4e4e4e;
    }
  }
`
