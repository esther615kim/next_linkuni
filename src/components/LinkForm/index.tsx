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

    console.log("saved data after", e.target.name, values);
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
    console.log("saved data", values);
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
      <div className="flex align-center justify-center">
        <PaperClipIcon className="text-indigo-500 m-1 w-5 h-5" />
        <h3 className="font-semibold text-lg text-slate-600">Add Link</h3>
      </div>
      {/* INPUTS*/}
      <form className="py-1">
        <FormInput
          name="link"
          type="text"
          value={values.link}
          placeholder="add your link here"
          onChange={onChange}
        />
        <FormInput
          name="title"
          type="text"
          value={values.title}
          onChange={onChange}
        />
        {/* CATEGORY */}
        <CategoryInput
          name="category"
          type="text"
          value={values.category}
          placeholder="add a category"
          addSelectedInput={addSelectedInput}
        />
        {/* TAGS - TO-DO */}
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
        <div className="h-8 md:px-4 relative text-center">
          {boxMessage && (
            <h3 className="absolute top-2 left-2 text-red-400">{boxMessage}</h3>
          )}
        </div>

        {/* BUTTONS */}
        <div className="my-6 flex justify-between">
          <Button onClick={handleClearInputs}>
            <div className="btn-inner-div bg-yellow-200 hover:bg-yellow-300 text-gray-800">
              {/* <NoSymbolIcon className="m-0.5 w-5 h-5 " /> */}
              <p className="w-14">CLEAR</p>
            </div>
          </Button>
          <Button onClick={handleSaveLink}>
            <div className="btn-inner-div text-white bg-indigo-400 hover:bg-indigo-500">
              <DocumentPlusIcon className="m-0.5 w-5 h-5 " />
              <p className="w-14">SAVE</p>
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};
