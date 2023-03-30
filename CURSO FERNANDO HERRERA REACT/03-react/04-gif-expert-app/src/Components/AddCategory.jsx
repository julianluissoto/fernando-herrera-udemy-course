import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit} aria-label="form">
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

AddCategory.proptype = {
  onNewCategory: PropTypes.func.isRequired,
};
