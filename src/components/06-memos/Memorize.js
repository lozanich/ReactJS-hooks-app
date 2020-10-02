import React, { useState } from "react";
import "./memos.css";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { state: counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Momorize</h1>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-3"
      >
        show / hide {JSON.stringify(show)}
      </button>
    </>
  );
};
