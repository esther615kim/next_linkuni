import { PencilSquareIcon } from "@heroicons/react/24/outline";

// add url button

export const AddUrlBox = function () {
  return (
    <div className="inline-flex items-center justify-center w-10 p-2 m-5 bg-indigo-500 rounded-md shadow-lg hover:bg-indigo-400 ">
      <PencilSquareIcon className="w-6 h-6 text-white" />
    </div>
  );
};
