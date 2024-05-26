import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const status = isLoggedIn ? "로그인" : "로그아웃";

  return (
    <div style={{ borderBottom: "1px solid red" }}>현재 {status} 상태</div>
  );
};

export default Display;
