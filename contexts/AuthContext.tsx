"use client";
import React, {
  createContext,
  useState,
  useEffect,
  FC,
  PropsWithChildren,
} from "react";

const AuthContext = createContext({
  token: "",
  login(_jwtToken: string) {},
  logout() {},
});

export const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [token, setToken] = useState("");

  const login = (value: string) => {
    console.log("login", value);
    setToken(value);
    try {
      localStorage.setItem("paguefit_token", String(value));
      console.log("Token stored successfully");
    } catch (error) {
      console.error("Failed to store token", error);
    }
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("paguefit_token");
  };

  const isTokenExpired = (value: string) => {
    if (value.split(".").length === 1) return;
    const decodedToken = JSON.parse(atob(value.split(".")[1]));
    const expirationTime = decodedToken.exp * 1000;
    return Date.now() > expirationTime;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("paguefit_token");

    if (storedToken) {
      if (isTokenExpired(storedToken)) {
        logout();
      } else {
        setToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      if (token.split(".").length === 1) return;
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000 - Date.now();

      // const timeoutId = setTimeout(() => {
      //   logout();
      // }, expirationTime);

      // return () => clearTimeout(timeoutId);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
