interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // any better type?
  handleButtonClick: () => void;
}

const Button = ({ children, handleButtonClick }: ButtonProps) => {
  return (
    <button className="p-2" onClick={handleButtonClick}>
      {children}
    </button>
  ); // 기본적인 style을 주고 나서 props 로 addtional 하게 받는 건? keyima?
};

export default Button;

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     additionalProps?: string;
//   }

// const Button = ({ children, ...additionalProps }: ButtonProps) => {
//   return <button {...additionalProps}>{children}</button>; // 기본적인 style을 주고 나서 props 로 addtional 하게 받는 건?
// };

// export default Button;
