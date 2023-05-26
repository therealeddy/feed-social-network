import styled from 'styled-components'

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  overflow: hidden;

  .cover {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
    strong {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.gray_100};
      line-height: 1.6;
    }
    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray_400};
      line-height: 1.6;
    }
  }

  footer {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_600};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    a {
      width: 100%;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.green_500};
      border: 1px solid ${({ theme }) => theme.colors.green_500};
      border-radius: 5px;
      height: 50px;
      padding: 0 1.5rem;
      font-weight: bold;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
      transition: color 0.1s, background 0.1s;
      :hover {
        background: ${({ theme }) => theme.colors.green_500};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
