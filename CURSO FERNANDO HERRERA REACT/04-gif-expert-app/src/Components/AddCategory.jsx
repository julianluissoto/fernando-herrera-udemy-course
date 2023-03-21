import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (value.length <= 1) return;

    onNewCategory(value.toLowerCase());
    /* setCategories((categories) => [inputValue, ...categories]); */
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search gif"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button>Search</button>
    </form>
  );
};

export default AddCategory;
