import React from "react";

const Button = ({ lable, onClick: handleClick }) => {
  return <button onClick={handleClick}>{lable}</button>;
};

export default Button;
