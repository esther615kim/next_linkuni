type InputProps = {
    name:string
    type: string;
    placeholder?: string;
    value: string;
    addSelectedInput?:()=> void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

 type Inputs = {
    link:string
    title: string;
    category:string;
    tags?: null | string[];
    memo: string;
  };

// combine event types
 type EventProps = React.ChangeEvent<HTMLInputElement>;
 type EventBtnProps = React.MouseEvent<HTMLButtonElement>;


 export {InputProps,Inputs,EventBtnProps,EventProps}