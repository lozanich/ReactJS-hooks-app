import React, { useEffect, useState } from "react";
import "./effects.css";
import { CleanUseEffect } from "./CleanUseEffect";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;
  useEffect(() => {
    // console.log("INIT EFFECT");
  }, []);

  useEffect(() => {
    // console.log("Form state change");
  }, [formState]);

  useEffect(() => {
    // console.log("Email change");
  }, [email]);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Use effect form</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Escribe tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Escribe tu correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <CleanUseEffect />}
    </>
  );
};
