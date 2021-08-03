import { FC, useState } from "react";
import AddCategory from "../addCategory";
import { IndexCode } from "./IndexCode";

const GifExpertApp: FC = (props) => {
  const ic = IndexCode();

  return (
    <div>
      <h1>GifExpertApp</h1>
      <br/>
      <hr />
      <br />
      <AddCategory categories={ic.categories} setCategories={ic.setcategories} />

      <br />
      <hr />
      <br />
      <ol>
        {ic.categories.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
