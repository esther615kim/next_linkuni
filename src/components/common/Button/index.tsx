import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...additionalProps }: ButtonProps) => {
  return <button {...additionalProps}>{children}</button>;
};

export default Button;
