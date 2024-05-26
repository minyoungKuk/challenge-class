export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
}

export default authReducer;
