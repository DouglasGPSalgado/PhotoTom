import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { Home } from '@screens/Home'
import { Palette } from '@screens/Palette'
import { Photo } from '@screens/Photo'
import { Results } from '@screens/Results'
import { SkinColor } from '@screens/SkinColor'
import React from 'react'

type AppRoutesProps = {
  signIn: undefined
  home: undefined
  Palette: undefined
  photo: undefined
  results: undefined
  skinColor: undefined
}

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutesProps>

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#003E52',
        headerTitleStyle: { display: 'none' },
      }}
    >
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen name="Palette" component={Palette} />
      <Screen name="photo" component={Photo} options={{ headerShown: false }} />
      <Screen name="results" component={Results} />
      <Screen name="skinColor" component={SkinColor} />
    </Navigator>
  )
}
