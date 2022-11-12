import { EventProps, InputProps } from "../../types";
import React, { useState } from "react";

const CATEGORIES = ["recipe", "DEV", "personal", "finance", "shorts"];

export const CategoryInput = ({
  name,
  type,
  placeholder,
  addSelectedInput,
}: InputProps) => {
  const [selected, setSelected] = useState("");

  const handleSelectedInput = (e: EventProps) => {
    e.preventDefault();
    addSelectedInput(name, selected); // ....
  };

  return (
    <div className="flex my-4">
      <p className="m-1 w-20 font-semibold text-indigo-400 pr-1">{name}</p>
      <input
        className="text-center rounded w-30 shadow-sm border-gray-400 placeholder-gray-400 py-1 px-0.5 mr-1"
        placeholder={placeholder}
        type={type}
      />

      {/* DISPLAY OPTIONS */}
      <select
        name={name}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        onBlur={handleSelectedInput}
        className="pl-2 md:w-3/5 bg-gray-100 rounded"
      >
        {CATEGORIES.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};
