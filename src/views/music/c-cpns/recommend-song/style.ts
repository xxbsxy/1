import styled from 'styled-components'

export const SongWrapper = styled.div`
  .td1 {
    display: flex;
    align-items: center;
    width: 500px;
    img {
      margin: 0 15px;
      width: 35px;
      height: 35px;
      border-radius: 4px;
    }
  }
  .td2 {
    width: 300px;
  }
  .td3 {
    width: 300px;
  }
  .td4 {
    width: 200px;
  }
  .item {
    line-height: 50px;
    border-top: 0.5px solid #ebeef5;
    &:hover {
      background-color: #f5f7fa;
    }
    td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .top {
    transform: translateY(-10px);
    font-size: 14px;
    font-weight: 700;
    color: #909399;
    .song-name {
      margin-left: 10px;
    }
  }
`
