import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import { Palette } from "./pages/Palette";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
