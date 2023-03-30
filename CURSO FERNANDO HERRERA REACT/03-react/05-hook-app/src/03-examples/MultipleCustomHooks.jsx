import React from "react";

import { useCounter, useFetch } from "../Hooks"; //using a barrel we avoid to call multiple hooks from same folder
import { LoadingQuote } from "./LoadingQuote";
import Quote from "./Quote";
const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError, getBreakingFecth } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  // console.log(counter);
  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote data={data} />}

      <button
        onClick={() => decrement()}
        disabled={isLoading || counter === 1}
        className="btn btn-primary"
      >
        Prev
      </button>
      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
};

export default MultipleCustomHooks;
