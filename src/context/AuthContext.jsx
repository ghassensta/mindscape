import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ isConnected, setIsConnected] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const login = ({email, password}) => {
        setLoading(true);
        //login
        setLoading(false);
    }

    const register = ({data}) => {
        setLoading(true);
        //register
        setLoading(false);
    }
    return (
        <AuthContext.Provider value={{ user, isConnected, loading, login, register}}>
            {children}
        </AuthContext.Provider>
    )
}
