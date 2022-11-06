import Button from "../common/Button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// add url button

export const AddUrlBox = function () {
  const handleBtnClick = () => {
    console.log("url button clicked");
  };

  return (
    <>
      <Button handleButtonClick={handleBtnClick}>
        <PencilSquareIcon className="icon-primary" />
      </Button>
    </>
  );
};
