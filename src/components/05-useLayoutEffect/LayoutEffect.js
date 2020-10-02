import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./layouteffect.css";

export const LayoutEffect = () => {
  const { state: counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = data.length > 0 && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  const handleGetQuote = () => {
    increment(1);
  };

  return (
    <>
      <h1>Layout Effect!!!</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <pre>{JSON.stringify(boxSize)}</pre>

      <button onClick={handleGetQuote} className="btn btn-primary">
        Get more
      </button>
    </>
  );
};
