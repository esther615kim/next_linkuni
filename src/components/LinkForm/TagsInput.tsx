import { EventProps, InputProps } from "../../types";
import React, { createRef, KeyboardEvent, useRef, useState } from "react";
import { useEffect } from "react";

export const TagsInput = ({
  name,
  type,
  placeholder,
  addSelectedInput,
}: InputProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const tagElement = e.target as HTMLInputElement;
    const tagValue = tagElement.value;

    if (e.key !== "Enter") return;

    if (!tagValue.trim()) {
      console.info("empty value");
      return;
    }
    setTags([...tags, tagValue]);
    setInputValue("");
  };

  const removeTag = (index: number): void => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  useEffect(() => {
    setTags([]);
  }, []);

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <p className="w-20 pr-1 m-1 font-semibold text-gray-900">{name}</p>
        <input
          className="flex-grow p-1 text-center placeholder-gray-400 border-gray-400 rounded shadow-sm"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue((prev) => e.target.value)}
          value={inputValue}
          onBlur={() => {
            addSelectedInput?.(name, tags);
          }}
          type={type}
          name={name}
        />
      </div>
      {/* DISPLAY TAGS */}
      <ul className="flex flex-wrap justify-center mt-1 ml-10 w-70">
        {tags.map((tag, index) => (
          <li
            key={index}
            onClick={() => {
              removeTag(index);
            }}
            className="mr-0.5 text-xs rounded-md border-solid border-2 m-1 px-2"
          >
            {`#${tag}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
