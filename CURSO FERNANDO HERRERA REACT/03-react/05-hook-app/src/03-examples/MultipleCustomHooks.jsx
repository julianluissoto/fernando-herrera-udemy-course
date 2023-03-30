import React from "react";
import useFetch from "../Hooks/useFetch";

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {isLoading ? (
        <h3 className="alert alert-info" text-center>
          Loading...please wait
        </h3>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{data[0].quote}</p>
          <footer className="blockquote-footer mt-1">{data[0].author}</footer>
        </blockquote>
      )}
    </>
  );
};

export default MultipleCustomHooks;
