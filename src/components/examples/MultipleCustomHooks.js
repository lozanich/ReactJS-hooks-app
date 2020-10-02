import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./examples.css";

export const MultipleCustomHooks = () => {
  const { state: counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = data.length > 0 && data[0];

  const handleGetQuote = () => {
    increment(1);
  };

  return (
    <>
      <h1>Breaking bad quotes!!!</h1>
      <hr />

      {loading && (
        <div className="alert alert-info text-center">Loading....</div>
      )}

      <blockquote className="blockquote text-right">
        <p className="mb-0">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button onClick={handleGetQuote} className="btn btn-primary">
        Get more
      </button>
    </>
  );
};
