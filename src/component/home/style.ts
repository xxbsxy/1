import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width: 1500px;
  height: 820px;
  background-color: #fff;
  border-radius: 25px;
  .header {
    height: 60px;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  .container {
    display: flex;
    height: 760px;
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
