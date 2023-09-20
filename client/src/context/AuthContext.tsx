import { createContext, useState, useContext, ReactNode } from "react";
import { registerUser, loginUser } from "../services/apiAuth";
import { User, userLoged } from "../Interfaces";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (user: User) => {
    try {
      const res = await registerUser(user);
      // console.log(res);
      setUser(res);
      // console.log(user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error)
    }
  };

  const signin = async (user: userLoged) => {
    try {
      const res = await loginUser(user);
      console.log(res)
      setUser(res);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{signup, signin, user, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider