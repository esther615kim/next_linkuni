import { CATEGORIES } from "../../data/mockData";
import { EventProps } from "../../types";
import React, { KeyboardEvent, useState } from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  addSelectedInput?: (name: string, selected: string) => void;
};

export const CategoryInput = ({
  name,
  type,
  placeholder,
  addSelectedInput,
}: InputProps) => {
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState(CATEGORIES);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // e.preventDefault();

    // not Entered
    if (e.key !== "Enter") return;
    const categoryElement = e.target as HTMLInputElement;
    const newCategory = categoryElement.value;
    // empty input
    if (!newCategory.trim()) {
      console.info("empty value");
      return;
    }
    setCategories([...categories, newCategory]);
    // nitialise input
    setSelected("");
  };

  return (
    <div className="flex my-4">
      <p className="w-20 pr-1 m-1 font-semibold text-indigo-400">{name}</p>
      <input
        className="text-center rounded w-30 shadow-sm border-gray-400 placeholder-gray-400 py-1 px-0.5 mr-1"
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        type={type}
      />

      {/* DISPLAY OPTIONS */}
      <select
        name={name}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        onBlur={(e) => {
          e.preventDefault();
          addSelectedInput?.(name, selected);
        }}
        className="pl-2 bg-gray-100 rounded md:w-3/5"
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};
