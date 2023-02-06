import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import ImageProvider from "./src/contexts/img";

export default function App() {
  return (
    <NavigationContainer>
      <ImageProvider>
        <Routes />
      </ImageProvider>
    </NavigationContainer>
  );
}
