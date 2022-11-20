import { LinkForm } from "../LinkForm";
import Button from "../common/Button";
import Modal from "./../common/Modal/index";
import Portal from "./../common/Portal/index";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const AddUrlBox = function () {
  const [isOpen, setIsOpen] = useState(false);
  const handleBtnClick = () => {
    setIsOpen(true); //vs (prev) => true
  };

  const onClose = () => setIsOpen(false);

  return (
    <div className="mb-2">
      <Button onClick={handleBtnClick}>
        <PencilSquareIcon className="bg-indigo-500 icon-primary hover:bg-indigo-400" />
      </Button>

      <Portal>
        <Modal isOpen={isOpen} onClose={onClose}>
          <LinkForm />
        </Modal>
      </Portal>
    </div>
  );
};
