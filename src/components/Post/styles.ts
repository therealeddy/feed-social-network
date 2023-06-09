import styled from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  .content {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray_300};
    margin-top: 1.5rem;
    p {
      margin-top: 1rem;
      a {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.green_500};
        text-decoration: none;
        :hover {
          color: ${({ theme }) => theme.colors.green_300};
        }
      }
    }
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    time {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray_400};
    }
    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
      .author-info {
        display: flex;
        flex-direction: column;
        strong {
          color: ${({ theme }) => theme.colors.gray_100};
          line-height: 1.6;
        }
        span {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors.gray_400};
          line-height: 1.6;
        }
      }
    }
  }

  .comment-form {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray_600};
    :focus-within footer {
      visibility: visible;
      max-height: none;
    }
    > strong {
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.gray_100};
    }
    textarea {
      width: 100%;
      background: ${({ theme }) => theme.colors.gray_900};
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.gray_100};
      line-height: 1.4;
      margin-top: 1rem;
    }
    footer {
      visibility: hidden;
      max-height: 0;
    }
    button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: 0px;
      background: ${({ theme }) => theme.colors.green_500};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      cursor: pointer;
      transition: background 0.1s;
      :disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      :not(:disabled):hover {
        background: ${({ theme }) => theme.colors.green_300};
      }
    }
  }

  .comment-list {
    margin-top: 2rem;
  }
`
