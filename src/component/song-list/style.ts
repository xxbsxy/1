import styled from 'styled-components'

export const SongListWrapper = styled.div`
  .td1 {
    display: flex;
    align-items: center;
    margin-left: 0;
    width: 500px;
    .pic {
      margin: 0 15px;
      width: 40px;
      height: 40px;
      border-radius: 6px;
    }
  }
  .name,
  .al-name {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .td4 {
    width: 200px;
  }
  .item {
    line-height: 58px;
    border-top: 0.5px solid #ebeef5;
    &:hover {
      background-color: #f5f7fa;
    }
  }
  .top {
    transform: translateY(-10px);
    font-size: 14px;
    font-weight: 700;
    color: #909399;
    .song-name {
      margin-left: 5px;
    }
  }
`
