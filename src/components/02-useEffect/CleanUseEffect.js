import React, { useEffect, useState } from "react";
import "./effects.css";

export const CleanUseEffect = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    console.log("message execute");

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      console.log("Compnente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h1>Clean use effect</h1>
      <p>
        Coordenadas Mouse x: {x}, y: {y}
      </p>
      <hr />
    </>
  );
};
