import { createContext, useContext } from "react";

export const AuthContext = createContext<{
    authStatus: boolean;
    setAuthStatus: (status: boolean) => void;
}>({
    authStatus: false,
    setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;
export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
}

export default AuthContext;