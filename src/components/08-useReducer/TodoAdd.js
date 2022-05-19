import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddToDo }) => {
  const { values, handleInputChange, reset } = useForm({
    description: "",
  });

  const { description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddToDo(newTask);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={handleInputChange}
          value={description}
          name="description"
          placeholder="Aprender../"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
