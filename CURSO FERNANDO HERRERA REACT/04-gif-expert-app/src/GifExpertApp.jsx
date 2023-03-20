import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return alert("ya esta en la lista");

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(newCatValue) => addCategory(newCatValue)}
        /* setCategories={setCategories}  */
      />

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <GifGrid key={category} category={category} />
        </div>
      ))}
    </>
  );
};

export default GifExpertApp;
