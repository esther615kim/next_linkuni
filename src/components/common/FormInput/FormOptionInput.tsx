import { InputProps } from "../../../types";
import React, { useState } from "react";

const CATEGORIES = ["recipe", "DEV", "personal", "finance", "shorts"];

export const FormOptionInput = ({
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
        <p className="m-1 font-semibold text-indigo-600 pr-1">{name}</p>
        <input
          className="text-center rounded shadow-sm border-gray-400 placeholder-gray-400 p-1 md:w-65"
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          name={name}
        />
      </div>
      {/* DISPLAY OPTIONS */}
      <div className="flex flex-wrap justify-center w-60 mt-1">
        {CATEGORIES.map((category) => (
          <span key={category} className="mr-1 rounded-md bg-gray-100 m-1 px-2">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};
