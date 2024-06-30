import { useAuth } from "../contexts/auth.context";

const Display = () => {
  const { isLoggedIn } = useAuth();

  return <div>로그인 여부 ({isLoggedIn.toString()}) </div>;
};

export default Display;
