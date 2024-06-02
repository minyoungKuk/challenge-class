import React from "react";
import { useAuth } from "../contexts/auth.context";

const Button = () => {
  const { logIn, logOut } = useAuth();

  console.log("버튼 렌더링");
  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
};

export default Button;
