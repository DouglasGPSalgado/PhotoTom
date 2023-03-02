import React from 'react'
import { SignIn } from '@screens/SignIn'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
)

export default AuthRoutes
