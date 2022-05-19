import React, { useMemo, useState } from "react";
import "./memos.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h1>Counter: {counter}</h1>
      <hr />

      <p>{memoProcesoPesado}</p>

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
