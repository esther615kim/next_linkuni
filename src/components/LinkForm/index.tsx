import Button from "../common/Button";
import { FormInput } from "../common/FormInput";
import {
  PaperClipIcon,
  DocumentPlusIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

type Inputs = {
  link: string;
  title: string;
  category: null | string[];
  tags?: null | string[];
  memo: string;
};
type EventProps = React.ChangeEvent<HTMLInputElement>;

export const LinkForm = () => {
  const [values, setInputValues] = useState<Inputs>({
    title: "",
    link: "",
    category: null,
    tags: null,
    memo: "",
  });
  const [isError, setIsError] = useState(false);

  // const handleSubmit = (e: EventProps) => {
  //   e.preventDefault();
  // };
  const onChange = (e: EventProps) => {
    console.log("name", e.target.name, "value", e.target.value);
    setInputValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSaveLink = (e) => {
    e.preventDefault();
    if (Object.values(values).includes("" || null)) {
      // ADD ERROR MESSAGE
      setIsError((prev) => true); //??
      return;
    }
    console.log("save", values);
  };

  useEffect(() => {
    setIsError(false);
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
          {/* TAG */}
          <FormInput
            name="memo"
            type="text"
            value={values.memo}
            onChange={onChange}
          />
          {/* ERROR MESSAGE */}
          <div className="h-8 md:px-4 relative text-center">
            {isError && (
              <h3 className="absolute top-2 left-2 text-red-400">
                Complete the required fields.
              </h3>
            )}
          </div>

          {/* BUTTONS */}
          <div className="my-6 flex justify-between">
            <Button onClick={() => console.log("nope")}>
              <div className="btn-inner-div bg-yellow-200 hover:bg-yellow-300 text-gray-800">
                {/* <NoSymbolIcon className="m-0.5 w-5 h-5 " /> */}
                <p className="w-14">CANCEL</p>
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
