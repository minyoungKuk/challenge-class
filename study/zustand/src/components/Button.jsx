import React from "react";
import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  // 다 따로따로 꺼내는 방법
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  // 구조 분해 방식으로 꺼내려면 useShallow를 사용해야 함
  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("버튼 리렌더링");
  return (
    <div>
      <button onClick={logIn}>로그인</button>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
}

export default Button;
