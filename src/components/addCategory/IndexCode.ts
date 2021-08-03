import { useState } from "react";


export interface IProps {
    categories: string[];
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  }

export const IndexCode = (props: IProps) => {
    const [inputValue, setInputValue] = useState('');
  
    function tbOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(e.target.value);
    }
    function tbOnkeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key === "Enter" && inputValue.trim() !== "") {
        props.setCategories([...props.categories, inputValue]);
        setInputValue("");
      }
    }
  
    return {
      inputValue,
       setInputValue,
      tbOnChange,
      tbOnkeyDown,
    };
  };