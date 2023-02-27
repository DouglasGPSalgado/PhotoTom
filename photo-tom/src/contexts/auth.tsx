import React, { createContext, PropsWithChildren, useState } from "react";
import * as auth from "../services/auth";


interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [user, setUser] = useState<object | null>(null);

    async function signIn(){
       const response = await auth.signIn();
       console.log(response);   

       setUser(response.user);
    }
    function signOut() {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;