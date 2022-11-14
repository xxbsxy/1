import styled from 'styled-components'

export const AsideWrapper = styled.div`
  .item {
    display: flex;
    align-items: center;
    padding: 7px 10px;
    margin-top: 12px;
    margin-left: 15px;
    width: 140px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #dddfe1;
    }

    .name {
      margin-left: 10px;
    }
  }
`
