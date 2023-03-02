import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, Spinner } from 'native-base'
import { StatusBar } from 'react-native'

import { AuthProvider } from './src/contexts/auth'
import ImageProvider from './src/contexts/img'
import Routes from './src/routes'
import { THEME } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <AuthProvider>
          <ImageProvider>
            {fontsLoaded ? <Routes /> : <Spinner />}
          </ImageProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
