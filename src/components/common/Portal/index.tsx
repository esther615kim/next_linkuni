import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false); // unmounted
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#myportal"))
    : null;
};

export default Portal;
