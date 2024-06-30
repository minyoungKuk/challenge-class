import useLoginStore from "../zustand/login.store";

const Display = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  return <div>로그인 여부 ({isLoggedIn.toString()})</div>;
};

export default Display;
