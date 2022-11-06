// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode; // any better type?
//   handleButtonClick: () => void;
// }
// const Button = ({ children, handleButtonClick }: ButtonProps) => {
//   return (
//     <button className="p-1 m-1" onClick={handleButtonClick}>
//       {children}
//     </button>
//   );
// };
// export default Button;
import type { ButtonHTMLAttributes, ReactNode } from "react";

//  type 임포트

type TProps = {
  //   color: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...additionalProps }: TProps) => {
  return <button {...additionalProps}>{children}</button>;
};

export default Button;
