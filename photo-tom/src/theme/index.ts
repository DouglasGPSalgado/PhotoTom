import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    blue: {
      800: '#002733',
      700: '#003E52',
      600: '#0F5C75',
      500: '#37859E',
      400: '#429FBC',
      300: '#6CC3DE',
      200: '#AAEBFF',
      100: '#C8F2FF',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    brown: {
      800: '#764A25',
      700: '#935C2E',
      600: '#875F42',
      500: '#986B4A',
      400: '#A97752',
      300: '#C39D7C',
      200: '#EAD1B2',
      100: '#fdebda',
    },
    white: '#FFF',
  },
  fonts: {
    heading: 'Roboto_500Medium',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
