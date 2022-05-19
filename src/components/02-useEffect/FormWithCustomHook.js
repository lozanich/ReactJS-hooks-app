import React from "react";
import "./effects.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const { values, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;
  const handleSumbmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSumbmit}>
      <h1>Form with custom hook</h1>
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

      <div className="form-group">
        <input
          type="Password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};
