# context api

## 사용 순서

1. 만든다 `createContext`
2. 사용한다 `useContext` / (_커스텀 훅으로 만들어서 멋지게 사용하쟝 ㅎ~_ ex: `export const useAuth = () => useContext(AuthContext);`)
3. 범위를 지정하여 값을 내려준다 `Provider`

## 사용 예시

```jsx
import { PropsWithChildren, createContext, useContext, useState } from "react";

type LoginState = {
  isLoggedIn: boolean,
  logIn: () => void,
  logOut: () => void,
};

const initialLoginState: LoginState = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

// 1. 만든다
export const AuthContext = createContext(initialLoginState);

// 2. 멋지게 사용 ^.^ (화살표 함수로 감싸는 이유? 안그러면 걍 바로 실행되니까! 실행을 늦추기 위해 함 감싼다)
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해 값을 내려준다
export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState < boolean > false;

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
```
