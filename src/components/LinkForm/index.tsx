import { EventBtnProps, EventProps, Inputs } from "../../types";
import Button from "../common/Button";
import { FormInput } from "../common/FormInput";
import { FormOptionInput } from "../common/FormInput/FormOptionInput";
import {
  PaperClipIcon,
  DocumentPlusIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";
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
      // ADD ERROR MESSAGE
      setBoxMessage("Complete the required fields."); // setBoxMessage((prev) => "Complete the required fields.");
      return;
    }
    console.log("save", values);
    setBoxMessage("It has saved successfully!");
  };

  const handleClearInputs = (e: EventBtnProps) => {
    e.preventDefault();
    setInputValues(initialValues);
  };

  useEffect(() => {
    setBoxMessage("");
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex align-center justify-center ">
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
          <FormOptionInput
            name="category"
            type="text"
            value={values.category}
            placeholder="add a category"
            onChange={onChange}
          />
          {/* TAG - TO-DO */}

          <FormInput
            name="memo"
            type="text"
            value={values.memo}
            onChange={onChange}
          />

          {/* MESSAGE BOX */}
          <div className="h-8 md:px-4 relative text-center">
            {boxMessage && (
              <h3 className="absolute top-2 left-2 text-red-400">
                {boxMessage}
              </h3>
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
    </div>
  );
};
