import React, { useState } from "react";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";
import "./focus.css";

export const RealExapleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-primary mt-5"
      >
        show / hide
      </button>
    </div>
  );
};
