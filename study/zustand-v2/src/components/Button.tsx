import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

const Button = () => {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("button rerendering");

  return (
    <div>
      <button onClick={logIn}> 로그인하기 </button>
      <button onClick={logOut}> 로그아웃하기 </button>
    </div>
  );
};

export default Button;
