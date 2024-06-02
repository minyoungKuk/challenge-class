import React, { useId } from "react";

const Input = ({ label, ...props }) => {
  const inputId = useId();

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={inputId}
          className="block border-2 w-80 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-4 py-1.5 rounded-md"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
