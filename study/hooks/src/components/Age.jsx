import React from "react";

const Age = ({ age }) => {
  console.log("age 리렌더링");
  return <div>{age}</div>;
};

export default React.memo(Age);
