import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ImageProvider from "./src/contexts/img";
import AuthRoutes from "./src/routes/auth.routes";
import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/themes";

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <ImageProvider>
            <Routes />
          </ImageProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
