import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value, // used [] because we use variable data
    });
  };
  const onResetForm = () => {
    setformState(
      initialForm // used [] because we use variable data
    );
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
