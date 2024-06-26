import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, LogOut } from "../redux/reducers/auth.reducer";

function AuthButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const handleClickButton = () => {
    // const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
    // dispatch(action);

    const action = isLoggedIn ? LogOut() : LogIn();
    dispatch(action);
  };

  return (
    <button onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃" : "로그인"}
    </button>
  );
}

export default AuthButton;
