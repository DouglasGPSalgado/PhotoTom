import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Palette from "../pages/Palette";
import Photo from "../pages/Photo";
//Paginas do formulario.
import Form from "../Form/Form";
import Form2 from "../Form/Form2";
import Form3 from "../Form/Form3";
import Form4 from "../Form/Form4";
import Form5 from "../Form/Form5";
import Form6 from "../Form/Form6";
import Form7 from "../Form/Form7";
import Form8 from "../Form/Form8";
import { SignUp } from "../pages/SignUp";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#DCE9F6",
        headerTitleStyle: { display: "none" },
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
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
    </Stack.Navigator>
  );
}
