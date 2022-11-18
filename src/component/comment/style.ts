import styled from 'styled-components'

export const CommentWrapper = styled.div`
  padding-right: 20px;
  .comment {
    position: relative;
    margin-top: 10px;
    padding-bottom: 30px;
    .btn {
      position: absolute;
      right: 10px;
      bottom: -20px;
      /* margin-top: 10px; */
    }
  }
  .comment-title {
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .comment-item {
    display: flex;
    padding: 20px 0;
    font-size: 15px;
    border-bottom: 1px solid rgb(226, 226, 226);
    .pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .right-area {
      margin-left: 15px;
      .content {
        margin-top: 10px;
        margin-left: 0;
      }
      .icon {
        margin-top: 10px;
        .like {
          margin-left: 5px;
        }
      }
    }
  }
`
