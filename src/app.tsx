import React from 'react'

import GlobalStyle from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/index.ts'
import { Analytics } from '@vercel/analytics/react'

import Home from './home'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
