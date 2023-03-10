import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { Home } from '@screens/Home'
import { Palette } from '@screens/Palette'
import Photo from '@screens/Photo'
import { Results } from '@screens/Results'
import { SkinColor } from '@screens/QueryForm/SkinColor'
import { HairColor } from '@screens/QueryForm/HairColor'
import React from 'react'
import { EyeColor } from '@screens/QueryForm/EyeColor'
import { AmountFreckles } from '@screens/QueryForm/AmountFreckles'
import { TannedSkin } from '@screens/QueryForm/TannedSkin'
import { BronzeIntensity } from '@screens/QueryForm/BronzeIntensity'
import { SunReaction } from '@screens/QueryForm/SunReaction'
import { FacialSunSensitivity } from '@screens/QueryForm/FacialSunSensitivity'

type AppRoutesProps = {
  signIn: undefined
  home: undefined
  Palette: undefined
  photo: undefined
  results: undefined
  skinColor: undefined
  hairColor: undefined
  eyeColor: undefined
  amountFreckles: undefined
  tannedSkin: undefined
  bronzeIntensity: undefined
  SunReaction: undefined
  facialSunSensitivity: undefined
}

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutesProps>

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C39D7C',
          height: 100,
        },
        headerTintColor: '#fff',
        headerTitleStyle: { display: 'none' },
      }}
    >
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen name="Palette" component={Palette} />
      <Screen name="photo" component={Photo} options={{ headerShown: false }} />
      <Screen name="results" component={Results} />
      <Screen name="skinColor" component={SkinColor} />
      <Screen name="hairColor" component={HairColor} />
      <Screen name="eyeColor" component={EyeColor} />
      <Screen name="amountFreckles" component={AmountFreckles} />
      <Screen name="tannedSkin" component={TannedSkin} />
      <Screen name="bronzeIntensity" component={BronzeIntensity} />
      <Screen name="SunReaction" component={SunReaction} />
      <Screen name="facialSunSensitivity" component={FacialSunSensitivity} />
    </Navigator>
  )
}
