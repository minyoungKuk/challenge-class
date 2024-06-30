import { PropsWithChildren, createContext, useContext, useState } from "react";

type LoginState = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const initialLoginState: LoginState = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

// 1. 만든다
export const AuthContext = createContext(initialLoginState);

// 2. 멋지게 사용 ^.^
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해 값을 내려준다
export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
