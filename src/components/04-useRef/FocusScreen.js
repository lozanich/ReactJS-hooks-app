import React, { useRef } from "react";
import "./focus.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="nombre" />

      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
