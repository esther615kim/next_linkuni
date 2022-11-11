export type InputProps = {
    name:string
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  
export type Inputs = {
    link:string
    title: string;
    category: null | string[];
    tags?: null | string[];
    memo: string;
  };

export type EventProps = React.ChangeEvent<HTMLInputElement>;

//  한꺼번에 export 하기