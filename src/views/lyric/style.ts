import styled from 'styled-components'

export const LyricWrapper = styled.div`
  margin-top: 60px;
  .container {
    display: flex;
    justify-content: space-between;
    height: 620px;
  }
  .right {
    margin-right: 150px;
    .lyrics {
      position: relative;
      height: 500px;
      width: 500px;
      font-size: 16px;
      overflow-y: scroll;
      overflow-x: hidden;
      white-space: nowrap;
      .lyrics-item {
        line-height: 40px;
      }
    }
    .song-name {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 15px;
    }
    .name {
      display: flex;
      margin-bottom: 15px;
      font-size: 16px;
      .ar-name {
        margin-left: 40px;
      }
    }
    .active {
      font-size: 26px;
      font-weight: 700;
      color: #6ca5fe;
    }
  }
  .left {
    display: flex;
    align-content: center;
    justify-content: center;
    flex: 1;
    img {
      margin-top: 100px;
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }
`
