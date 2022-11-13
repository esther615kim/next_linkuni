import { EventProps, InputProps } from "../../types";
import React, { createRef, KeyboardEvent, useState } from "react";
import { useEffect } from "react";

export const TagsInput = ({
  name,
  type,
  placeholder,
  addSelectedInput,
}: InputProps) => {
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // not Entered
    if (e.key !== "Enter") return;
    const tagValue = e.target?.value;
    // empty input
    if (!tagValue.trim()) {
      console.info("empty value");
      return;
    }
    setTags([...tags, tagValue]);
    // TO FIX: initialise input
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
        <p className="m-1 w-20 font-semibold text-gray-900 pr-1">{name}</p>
        <input
          className="flex-grow text-center rounded shadow-sm border-gray-400 placeholder-gray-400 p-1"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            addSelectedInput(name, tags);
          }}
          type={type}
          name={name}
        />
      </div>
      {/* DISPLAY TAGS */}
      <ul className="flex flex-wrap justify-center ml-10 w-70 mt-1">
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
