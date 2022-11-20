import { EventBtnProps, EventProps, Inputs } from "../../types";
import Button from "../common/Button";
import { FormInput } from "../common/FormInput";
import { CategoryInput } from "./CategoryInput";
import { TagsInput } from "./TagsInput";
import { PaperClipIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const initialValues = {
  title: "",
  link: "",
  category: "",
  tags: null,
  memo: "",
};

export const LinkForm = () => {
  const [values, setInputValues] = useState<Inputs>(initialValues);
  const [boxMessage, setBoxMessage] = useState<null | string>(null);

  const onChange = (e: EventProps) => {
    setInputValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveLink = (e: EventBtnProps) => {
    e.preventDefault();
    if (values.link === "") {
      // TO-DO: ADD ERROR MESSAGE
      setBoxMessage("Complete the required fields."); // setBoxMessage((prev) => "Complete the required fields.");
      return;
    }
    setBoxMessage("It has been saved successfully!");
    console.log("saved FINALLY", values);
  };

  // CATEGORY, TAG INPUTS
  const addSelectedInput = (name: string, selected: string | string[]) => {
    setInputValues({
      ...values,
      [name]: selected,
    });
  };

  const handleClearInputs = (e: EventBtnProps) => {
    e.preventDefault();
    setInputValues(initialValues);
  };

  useEffect(() => {
    setBoxMessage("");
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center align-center">
        <PaperClipIcon className="w-5 h-5 m-1 text-indigo-500" />
        <h3 className="text-lg font-semibold text-slate-600">Add Link</h3>
      </div>
      {/* INPUTS*/}
      <div
        // onSubmit={(e) => {
        //   e.preventDefault();
        // }}
        // method="get"
        className="py-1"
      >
        <FormInput
          name="link"
          type="text"
          value={values.link}
          placeholder="required"
          onChange={onChange}
        />
        <FormInput
          name="title"
          type="text"
          value={values.title}
          placeholder="required"
          onChange={onChange}
        />
        <CategoryInput
          name="category"
          type="text"
          value={values.category}
          placeholder="add a category"
          addSelectedInput={addSelectedInput}
        />
        <TagsInput
          name="tags"
          type="text"
          value={values.category}
          placeholder="optional"
          addSelectedInput={addSelectedInput}
        />
        <FormInput
          name="memo"
          type="text"
          value={values.memo}
          onChange={onChange}
        />

        {/* MESSAGE BOX */}
        <div className="relative h-8 text-center md:px-4">
          {boxMessage && (
            <h3 className="absolute text-red-400 top-2 left-2">{boxMessage}</h3>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between my-6">
          <Button onClick={handleClearInputs}>
            <div className="text-gray-800 bg-yellow-200 btn-inner-div hover:bg-yellow-300">
              <p className="w-14">CLEAR</p>
            </div>
          </Button>
          <Button onClick={handleSaveLink}>
            <div className="text-white bg-indigo-400 btn-inner-div hover:bg-indigo-500">
              <DocumentPlusIcon className="m-0.5 w-5 h-5 " />
              <p className="w-14">SAVE</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
