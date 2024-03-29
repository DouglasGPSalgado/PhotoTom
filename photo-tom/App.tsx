import {
  DataDeliveryContext,
  DataDeliveryProvider,
} from '@contexts/DataDeliveryContext'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
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

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  }

  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <AuthProvider>
          <DataDeliveryProvider>
            <ImageProvider>
              {fontsLoaded ? <Routes /> : <Spinner />}
            </ImageProvider>
          </DataDeliveryProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
