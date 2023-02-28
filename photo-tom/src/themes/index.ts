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
      white: '#FFFFFF',

    },
    fonts: {
      heading: 'Roboto_700Bold',
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