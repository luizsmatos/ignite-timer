import 'styled-components'

interface ThemeType {
  white: string
  'gray-100': string
  'gray-300': string
  'gray-400': string
  'gray-500': string
  'gray-600': string
  'gray-700': string
  'gray-800': string
  'gray-900': string

  'green-300': string
  'green-500': string
  'green-700': string

  'red-500': string
  'red-700': string

  'yellow-500': string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
