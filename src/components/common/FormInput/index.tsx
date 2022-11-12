import { InputProps } from "../../../types";
import React, { useState } from "react";

export const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  //  TO-DO: add error messages
  const [blurred, setBlurred] = useState(false);
  // ERROR MESSAGE

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <p className="m-1 w-20 font-semibold text-gray-900 pr-1">{name}</p>
        <input
          className="text-center flex-grow rounded shadow-sm border-gray-400 placeholder-gray-400 p-1 focus:ring-indigo-600 md:w-80"
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          name={name}
        />
      </div>
    </div>
  );
};
