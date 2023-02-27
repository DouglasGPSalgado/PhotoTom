import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import * as auth from "../services/auth";
import { HStack, Spinner, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@PTAuth:user");
      const storagedToken = await AsyncStorage.getItem("@PTAuth:token");
      

       await new Promise(resolve => setTimeout(resolve, 2000))

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
        console.log("storagedUser");
      }
    }
    
    LoadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    console.log(response);

    setUser(response.user);
    await AsyncStorage.setItem("@PTAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@PTAuth:token", response.token);
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  if (loading) {
    return (
      <NativeBaseProvider>
          <HStack flex={1} justifyContent={"center"} alignItems={"center"}>
            <Spinner size={"lg"} color="#666"/>
          </HStack>
      </NativeBaseProvider>
    );
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;