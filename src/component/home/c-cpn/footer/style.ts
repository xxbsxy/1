import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  .footer {
    display: flex;
    align-items: center;
    width: 300px;
    overflow: hidden;
    .pic {
      margin-left: 20px;
      width: 54px;
      height: 54px;
      border-radius: 6px;
    }
    .right {
      margin-left: 14px;
      font-size: 16px;
      .song-name {
        margin-bottom: 10px;
      }
    }
  }
  .center {
    width: 600px;
    .svgs {
      position: relative;
      top: 3px;
      margin-left: 200px;
    }
  }
  .slider {
    position: relative;
    font-size: 14px;
    .create-time {
      position: absolute;
      top: -6px;
      left: -50px;
    }
    .end-time {
      position: absolute;
      top: -6px;
      right: -50px;
    }
  }
`
