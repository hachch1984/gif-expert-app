import { FC, useState } from "react";
import AddCategory from "../addCategory";
import GifGrid from "../gifGrid";

const GifExpertApp: FC = (props) => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <h1>GifExpertApp</h1>
      <br />

      <AddCategory category={category} setCategory={setCategory} />

      <br />
      <hr />
      <br />
      <ol>
        <GifGrid category={category} />
      </ol>
    </div>
  );
};

export default GifExpertApp;
