import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ImageProvider from "./src/contexts/img";
import AuthRoutes from "./src/routes/auth.routes";
import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
      <ImageProvider>
        <Routes/>
      </ImageProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
