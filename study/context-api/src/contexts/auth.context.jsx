import { createContext, useContext, useState } from "react";

// 1. 만든다
const initialValue = { isLoggedIn: false };

export const AuthContext = createContext(initialValue);

// 2. 멋지게 사용한다
// 화살표 함수를 사용하는 이유 -> 화살표가 아니라면 바로 실행이 된다. 사용하고 싶을때~~ 사용하기 위해~~
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정하여 값을 내려준다 -> provider
export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// context api => value로 보낸 값을 모두 하나로 봐야해서 저 값중 하나만 바뀌어도 값이 바뀌었다고 판단해버린다!!
