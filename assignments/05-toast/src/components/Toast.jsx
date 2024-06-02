import React from "react";

const Toast = ({ title, content }) => {
  return (
    <div className="shadow-lg bg-white p-6 border rounded-lg w-[320px] flex items-center text-sm">
      <div className="grow flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Toast;
