import Button from "./../Button/index";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-800/50">
      <div className="fixed top-1/2 lg:w-2/5 md:w-3/5 rounded-md z-10 left-1/2 p-2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md ">
        <Button className="w-full" onClick={onClose}>
          <div className="float-right">
            <XCircleIcon className="icon-primary text-slate-600" />
          </div>
        </Button>
        {/* ADD LINKFORM  */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
