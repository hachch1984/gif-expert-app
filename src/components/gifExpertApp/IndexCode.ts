import { useState } from "react";

export  const IndexCode=()=> {
    const [categories, setCategories] = useState([
      "One Punch",
      "Samuray X",
      "Dragon Ball",
    ]);
  
    function bnAdd() {
      setCategories([...categories, "new category " + new Date()]);
    }
  
    return {
      categories,
      setcategories: setCategories,
      bnAdd,
    };
  }
  