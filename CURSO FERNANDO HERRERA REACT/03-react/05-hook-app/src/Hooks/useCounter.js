import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = (value) => {
    setcounter(counter + value);
  };
  const decrement = (value) => {
    if (counter < 1) return;
    setcounter(counter - value);
  };
  const reset = () => {
    setcounter(initialValue);
  };

  return {
    counter: counter,
    increment,
    decrement,
    reset,
  };
};
