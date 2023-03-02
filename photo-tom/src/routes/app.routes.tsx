import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import React from 'react'

import Form from '../pages/Form/Form'
import Form2 from '../pages/Form/Form2'
import Form3 from '../pages/Form/Form3'
import Form4 from '../pages/Form/Form4'
import Form5 from '../pages/Form/Form5'
import Form6 from '../pages/Form/Form6'
import Form7 from '../pages/Form/Form7'
import Form8 from '../pages/Form/Form8'
import Home from '../pages/Home'
import Palette from '../pages/Palette'
import Photo from '../pages/Photo'
import Results from '../pages/Results'

type AppRoutes = {
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

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutes>

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator<AppRoutes>()

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
