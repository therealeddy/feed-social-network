import 'styled-components'

import light from '../styles/themes/light'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof light.colors
  }
}
