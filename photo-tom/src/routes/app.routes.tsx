import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Palette from "../screens/Palette";
import Photo from "../screens/Photo";
//Paginas do formulario.
import Form from "../screens/Form/Form";
import Form2 from "../screens/Form/Form2";
import Form3 from "../screens/Form/Form3";
import Form4 from "../screens/Form/Form4";
import Form5 from "../screens/Form/Form5";
import Form6 from "../screens/Form/Form6";
import Form7 from "../screens/Form/Form7";
import Form8 from "../screens/Form/Form8";
import Results from "../screens/Results";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";

export default function AppRoutes () {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#003E52",
        headerTitleStyle: { display: "none" },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Palette" component={Palette} />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={{ headerShown: false }}
      />
      {/* A baixo, a Stack segue as paginas de cada questão do formulario. */}
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Form2" component={Form2} />
      <Stack.Screen name="Form3" component={Form3} />
      <Stack.Screen name="Form4" component={Form4} />
      <Stack.Screen name="Form5" component={Form5} />
      <Stack.Screen name="Form6" component={Form6} />
      <Stack.Screen name="Form7" component={Form7} />
      <Stack.Screen name="Form8" component={Form8} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}
