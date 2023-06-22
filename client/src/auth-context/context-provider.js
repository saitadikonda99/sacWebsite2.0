import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { redirect } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const verifyAuth = useCallback(async () => {
    // const token = localStorage.getItem('token');
    const logedInUser = localStorage.getItem('user');
    if (!logedInUser) {
      setUser(null);
      return redirect("/home/internlogin");
    }
    setUser(JSON.parse(logedInUser))
  }, [])

  const logout = useCallback(async () => {
    await localStorage.removeItem("user");
    await localStorage.removeItem("token");
    await verifyAuth();
  }, [verifyAuth])

  useEffect(() => {
    if (!user) {
      verifyAuth().then(() => {
        console.log("User is authenticated");
      })
    }
  }, [user, verifyAuth]);

  const value = useMemo(
    () => ({ user, setUser, verifyAuth, logout }),
    [user, setUser, verifyAuth, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export default AuthContextProvider;

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
