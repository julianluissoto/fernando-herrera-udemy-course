import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return alert("ya esta en la lista");

    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (c) => {
    const newCatList = categories.filter((cat) => cat !== c);

    setCategories(newCatList);
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
          <button onClick={() => onDeleteCategory(category)}>X</button>
          <GifGrid key={category} category={category} />
        </div>
      ))}
    </>
  );
};

export default GifExpertApp;
