import React, { useState } from "react";

type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e) => void;
};
export const FormInput = ({
  label,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  const [blurred, setBlurred] = useState(false);
  // ERROR MESSAGE
  const handleFocus = () => {
    setBlurred((prev) => true);
  };

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <p className="m-1 font-semibold text-gray-900 pr-1">{label}</p>
        <input
          className="rounded shadow-sm border-gray-400 placeholder-gray-400 p-1 focus:ring-indigo-600 md:w-80"
          placeholder={placeholder}
          onChange={onChange}
          // onFocus={() => setBlurred((prev) => false)}
          // onBlur={handleFocus}
          type={type}
        />
      </div>
    </div>
  );
};
