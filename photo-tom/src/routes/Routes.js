import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Palette from "../pages/Palette";
import Photo from "../pages/Photo";
import Form from "../pages/Form";

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Palette" component={Palette} />
        <Stack.Screen 
          name="Photo"
          component={Photo} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
  );
}
