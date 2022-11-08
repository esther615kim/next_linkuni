import Button from "../common/Button";
import Portal from "./../common/Portal/index";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// add url button

export const AddUrlBox = function () {
  const handleBtnClick = () => {
    console.log("url button clicked");
  };

  return (
    <div className="mb-2">
      <Button onClick={handleBtnClick}>
        <PencilSquareIcon className="bg-indigo-500 icon-primary hover:bg-indigo-400" />
      </Button>

      <Portal>
        <h3>hello portal</h3>
      </Portal>
    </div>
  );
};
