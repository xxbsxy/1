import styled from 'styled-components'

export const PlayWrapper = styled.div`
  font-size: 13px;
  .title {
    margin: 10px 0px 10px 10px;
    font-weight: 700;
  }
  h3 {
    font-size: 14px;
    margin: 0px 0px 10px 10px;
  }
  .td1 {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 170px;
  }
  .td2 {
    padding-left: 15px;
    width: 170px;
  }
  .td4 {
    padding-left: 15px;
    width: 80px;
  }
  .song-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item {
    line-height: 40px;
    border-top: 0.5px solid #ebeef5;
    &:hover {
      background-color: #f5f7fa;
    }
  }
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
