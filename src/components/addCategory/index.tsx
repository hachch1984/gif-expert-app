import { FC } from "react";
import { IndexCode, IProps } from "./IndexCode";


const AddCategory: FC<IProps> = (props) => {
  const ic = IndexCode(props);

  return (
    <div>
      <input
        type="text"
        value={ic.inputValue}
        onChange={ic.tbOnChange}
        onKeyDown={ic.tbOnkeyDown}
      />
    </div>
  );
};
export default AddCategory;

