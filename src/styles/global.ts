import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500};
  }

  html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray_900};
    color: ${({ theme }) => theme.colors.gray_300};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
