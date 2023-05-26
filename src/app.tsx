import React from 'react'

import GlobalStyle from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/index.ts'

import Home from './home'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
