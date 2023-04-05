import React from 'react'
import { SignIn } from '@screens/SignIn'
import { createStackNavigator } from '@react-navigation/stack'
import { SignUp } from '@screens/SignUp'

type AppRoutesProps = {
  signIn: undefined
  signUp: undefined
}

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
)

export default AuthRoutes
