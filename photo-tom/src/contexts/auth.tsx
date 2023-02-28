import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn: (data) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function LoadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@PTAuth:user");
      const storagedToken = await AsyncStorage.getItem("@PTAuth:token");

      if (storagedUser && storagedToken) {
        setLoading(false);
        api.defaults.headers.Authorization = `Token ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        console.log(user);
      }
    }
    LoadStoragedData();
  }, []);

  async function signIn(data: any) {

    setUser(data.user);

    api.defaults.headers.Authorization = `Token ${data.token}`;

    await AsyncStorage.setItem("@PTAuth:user", JSON.stringify(data.user));
    await AsyncStorage.setItem("@PTAuth:token", data.token);
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, loading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
