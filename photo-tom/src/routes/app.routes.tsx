import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import React from 'react'

import Form from '@screens/Form/Form'
import Form2 from '@screens/Form/Form2'
import Form3 from '@screens/Form/Form3'
import Form4 from '@screens/Form/Form4'
import Form5 from '@screens/Form/Form5'
import Form6 from '@screens/Form/Form6'
import Form7 from '@screens/Form/Form7'
import Form8 from '@screens/Form/Form8'
import { Home } from '@screens/Home'
import { Palette } from '@screens/Palette'
import { Photo } from '@screens/Photo'
import { Results } from '@screens/Results'

type AppRoutesProps = {
  signIn: undefined
  home: undefined
  Palette: undefined
  photo: undefined
  form: undefined
  form1: undefined
  form2: undefined
  form3: undefined
  form4: undefined
  form5: undefined
  form6: undefined
  form7: undefined
  form8: undefined
  results: undefined
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
      <Screen name="form" component={Form} />
      <Screen name="form2" component={Form2} />
      <Screen name="form3" component={Form3} />
      <Screen name="form4" component={Form4} />
      <Screen name="form5" component={Form5} />
      <Screen name="form6" component={Form6} />
      <Screen name="form7" component={Form7} />
      <Screen name="form8" component={Form8} />
      <Screen name="results" component={Results} />
    </Navigator>
  )
}
