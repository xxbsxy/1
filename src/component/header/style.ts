import styled from 'styled-components'
import searchSvg from '@/assets/img/header/search.svg'
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  .logo {
    width: 44px;
    height: 44px;
    margin-left: 30px;
    border-radius: 8px;
  }
  .icons {
    margin-left: 100px;
    span {
      cursor: pointer;
    }
    .left-icon {
      margin-right: 14px;
    }
  }
  .search {
    margin-left: 300px;
    padding-left: 55px;
    width: 250px;
    height: 32px;
    outline: none;
    background-color: rgb(244, 244, 244);
    background-image: url(${searchSvg});
    background-repeat: no-repeat;
    background-position: 20px 5px;
    border: transparent;
    border-radius: 20px;
  }
`
