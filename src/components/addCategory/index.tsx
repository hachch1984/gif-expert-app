import { CSSProperties, FC, useState } from "react";

const css: CSSProperties = {
  width: "100%",
  fontSize: "18px",
};
interface IProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}
const AddCategory: FC<IProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  function tbOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  function tbOnkeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      props.setCategory(inputValue);
      setInputValue("");
    }
  }

  return (
    <div>
      <input
        style={css}
        type="text"
        value={inputValue}
        onChange={tbOnChange}
        onKeyDown={tbOnkeyDown}
      />
    </div>
  );
};
export default AddCategory;
