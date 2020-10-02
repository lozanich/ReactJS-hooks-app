import React, { useCallback, useState } from "react";
import "./memos.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      console.log("use Callbacc");
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h1>Call back hook</h1>
      <h2>Counter {counter}</h2>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
