import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  .comment-box {
    flex: 1;
    .comment-content {
      background: ${({ theme }) => theme.colors.gray_700};
      border-radius: 8px;
      padding: 1rem;
      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .author-and-time {
          strong {
            display: block;
            font-size: 0.875rem;
            line-height: 1.6;
          }
          time {
            display: block;
            font-size: 0.75rem;
            line-height: 1.6;
            color: ${({ theme }) => theme.colors.gray_400};
          }
        }
        button {
          background: transparent;
          border: 0px;
          color: ${({ theme }) => theme.colors.gray_400};
          cursor: pointer;
          line-height: 0;
          :hover {
            color: ${({ theme }) => theme.colors.red_500};
          }
        }
      }
      p {
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.gray_300};
      }
    }
    footer {
      margin-top: 1rem;
      button {
        background: transparent;
        border: 0px;
        color: ${({ theme }) => theme.colors.gray_400};
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 2px;
        :hover {
          color: ${({ theme }) => theme.colors.green_300};
          span::before {
            background-color: ${({ theme }) => theme.colors.green_300};
          }
        }
        svg {
          margin-right: 0.5rem;
        }
        span {
          display: flex;
          align-items: center;
          ::before {
            content: '';
            display: block;
            width: 3px;
            height: 3px;
            border-radius: 5px;
            background-color: ${({ theme }) => theme.colors.gray_400};
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
`
