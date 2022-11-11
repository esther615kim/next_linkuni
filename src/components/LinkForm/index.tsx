import { FormInput } from "../common/FormInput";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Inputs = {
  link: string;
  title: string;
  category: null | string[];
  tags?: null | string[];
  memo: string;
};

export const LinkForm = () => {
  const [values, setInputValues] = useState<Inputs>({
    link: "",
    title: "",
    category: null,
    tags: null,
    memo: "",
  });

  const onChange = (e) => {
    setInputValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex align-center justify-center ">
          <PaperClipIcon className="text-indigo-500 m-1 w-5 h-5" />
          <h3 className="font-semibold text-lg text-slate-600">Add Link</h3>
        </div>
        {/* INPUTS*/}
        <div className="py-1">
          <FormInput
            label="link"
            type="text"
            value={values.link}
            placeholder="add your link here"
            onChange={onChange}
          />
          <FormInput
            label="title"
            type="text"
            value={values.title}
            onChange={onChange}
          />
          {/* CATEGORY */}
          {/* TAG */}
          <FormInput
            label="memo"
            type="text"
            value={values.memo}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
