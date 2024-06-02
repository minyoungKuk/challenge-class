import React from "react";
import { useAuth } from "../contexts/auth.context";

const Display = () => {
  const { isLoggedIn } = useAuth();
  // const { isLoggedIn } = useContext(AuthContext);
  // const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return <div>로그인 여부 ({isLoggedIn.toString()}) </div>;
};

export default Display;

// 컴포넌트 분리 기준
// 1. 반복 될 때
// 2. 너무 많은 내용을 담고 있을때, 가독성 안좋을때 응집성을 높힌다
// 3. 불필요한 리렌더링을 막기 위해
