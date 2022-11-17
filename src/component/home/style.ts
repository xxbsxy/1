import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width: 1500px;
  height: 820px;
  background-color: #fff;
  border-radius: 20px;
  .header {
    height: 60px;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  .container {
    display: flex;
    height: 760px;
    position: relative;
    .list {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 80px;
      width: 440px;
      background-color: #fff;
      border-left: 1px solid rgb(226, 226, 226);
      box-shadow: -4px 0px 8px rgba(0, 0, 0, 0.1);
      overflow-y: scroll;
    }
  }
  .aside {
    width: 180px;
    height: 760px;
    border-right: 1px solid rgb(226, 226, 226);
  }
  .right-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    .content {
      flex: 1;
      margin-left: 15px;
      overflow-y: scroll;
    }
    .footer {
      height: 80px;
      border-top: 1px solid rgb(226, 226, 226);
    }
  }
`
